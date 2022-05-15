import { fetch } from '../index'

export interface QueryResourceImageListRequest {
  current: number;
  size: number;
  name?: string;
  type?: 1 | 2
};

export interface QueryResourceImageListResponse {
  message: string;
  code: number;
  data: {
    total: number,
    list: Array<{
      id: number;
      link: string;
      name: string;
      extra: string;
      type: number;
    }>
  }
}

export const queryImageResourceList = (params: QueryResourceImageListRequest) => {
  return fetch.request<QueryResourceImageListRequest, QueryResourceImageListResponse>({
    url: '/resource/list',
    method: 'get',
    params
  })
}
