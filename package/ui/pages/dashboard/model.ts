import { createModel } from '@rematch/core'
import type { RootModel } from '@/common/model/connect'
import store from '@/common/model'
import { isSuccess } from '@moyu-code/request'
import getViewListApi, { QueryViewListRequestDto, QueryViewListResponseDto } from '@/api/view/list'

interface MyAppModelState {
  tableData: QueryViewListResponseDto['data']
}

const state: MyAppModelState = {
  tableData: {
    total: 0,
    list: []
  }
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
    saveList (state, data: MyAppModelState['tableData']) {
      return {
        ...state,
        tableData: { ...data }
      }
    }
  }
})

export type MyAppModel = typeof myAppModel;

store.addModel({ name: 'myApp', ...myAppModel })
