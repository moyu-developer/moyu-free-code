import React from 'react'
import { createModel } from '@rematch/core'
import type { RootModel } from '@/common/model/connect'
import store from '@/common/model'
import { isSuccess } from '@moyu-code/request'
import getViewListApi, { QueryViewListResponseDto } from '@/api/view/list'
import { MaterialIcon } from '@moyu-code/control'
import { Trash } from 'tabler-icons-react'
import { Modal } from 'antd'

interface MyAppModelState {
  tableData: QueryViewListResponseDto['data'],
  mode: 'Card' | 'Table',
  searchParams: {
    size: number;
    current: number;
    type?: number;
    status?: number
  }
}

const state: MyAppModelState = {
  tableData: {
    total: 0,
    list: []
  },
  searchParams: {
    size: 10,
    current: 1
  },
  mode: 'Card'
}

const myAppModel = createModel<RootModel>()({
  state,
  effects: (dispatch) => ({
    async getDashViewList (_, state): Promise<{
      data: MyAppModelState['tableData']['list'],
      total: number;
      success: boolean
    }> {
      const searchParams = state.myApp.searchParams
      const { code, data } = await getViewListApi(searchParams)
      if (isSuccess(code)) {
        dispatch.myApp.saveList(data)
        return {
          success: true,
          data: data.list,
          total: data.total
        }
      }
      return {
        total: 0,
        data: [],
        success: false
      }
    },

    async deleteDashViewById (id: number) {
      Modal.confirm({
        icon: React.createElement(MaterialIcon, { icon: Trash }),
        title: '确认删除',
        content: '页面删除后会放入回收站，可以在回收站信息中找回它。超过100天后将会自动清除，请谨慎操作。',
        okText: '我要删除',
        okType: 'primary',
        okButtonProps: {
          danger: true
        }
      })
    }
  }),
  reducers: {

    /**
     * 保存页面列表
     * @param state 当前状态
     * @param data 表格数据
     * @returns Redux
     */
    saveList (state, data: MyAppModelState['tableData']) {
      return {
        ...state,
        tableData: { ...data }
      }
    },
    /**
     * 修改页面显示mode
     * @param state 当前状态
     * @param mode 显示模式
     * @returns Redux
     */
    onChangeMode (state, mode: MyAppModelState['mode']) {
      return {
        ...state,
        mode
      }
    },

    setSearchParams (state, search) {
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          ...search
        }
      }
    }
  }
})

export type MyAppModel = typeof myAppModel;

store.addModel({ name: 'myApp', ...myAppModel })
