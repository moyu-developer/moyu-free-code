import { createModel } from '@rematch/core'
import type { RootModel } from '@/common/model/connect'
import store from '@/common/model'
import { isSuccess } from '@moyu-code/request'
import getViewListApi, { QueryViewListRequestDto, QueryViewListResponseDto } from '@/api/view/list'

interface MyAppModelState {
  tableData: QueryViewListResponseDto['data'],
  mode: 'Card' | 'Table'
}

const state: MyAppModelState = {
  tableData: {
    total: 0,
    list: []
  },
  mode: 'Table'
}

const myAppModel = createModel<RootModel>()({
  state,
  effects: (dispatch) => ({
    async getDashViewList (payload: QueryViewListRequestDto) {
      const { code, data } = await getViewListApi(payload)
      if (isSuccess(code)) {
        dispatch.myApp.saveList(data)
      }
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
    }
  }
})

export type MyAppModel = typeof myAppModel;

store.addModel({ name: 'myApp', ...myAppModel })
