import fetch from './request'

export interface View {
  id?: number;
  name: string;
  description?: string;
  background?: string;
  schema: string;
  status?: number;
  env?: number;
}

/**
 * 保存页面数据
 * @see http://localhost:8500/docs/static/index.html#/views/ViewsController_saveView
 * @param data 页面数据
 * @returns { Response<number> }
 */
export const saveMicroView = (data: View) => {
  return fetch.request({
    url: '/views/save',
    method: 'POST',
    data
  })
}

/**
 * 通过id获取页面信息
 * @see http://localhost:8500/docs/static/index.html#/views/ViewsController_saveView
 * @param data 页面数据
 * @returns { Response<number> }
 */
export const getMicroViewById = (id: number) => {
  return fetch.request({
    url: `/views/${id}`,
    method: 'GET'
  })
}
