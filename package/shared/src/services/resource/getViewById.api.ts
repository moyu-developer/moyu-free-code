import { fetch } from '../index'

export interface GetViewByIdRequest {
  id: number;
}

export interface GetViewByIdResponse {
  message: string;
  code: number;
  data: null | {
    id: number;
    name: string;
    description?: string;
    background: string;
    schema: string;
    status: 0 | 1 | 2;
    env: 0 | 1 | 2;
  };
}

export const getViewByIdService = (id: number) => {
  return fetch.request<GetViewByIdRequest, GetViewByIdResponse>({
    url: `/views/${id}`,
    method: 'get'
  })
}
