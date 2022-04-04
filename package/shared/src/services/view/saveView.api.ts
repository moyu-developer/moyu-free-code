import { fetch } from '../index'

export interface SaveViewSchemaRequest {
  id?: number;
  name: string;
  description: string;
  background: string;
  schema: string;
  status: 0 | 1 | 2;
  env: 0 | 1 | 2;
};

export interface SaveViewSchemaResponse {
  message: string;
  code: number;
  data: number
}

export const saveViewSchemaService = (data: SaveViewSchemaRequest) => {
  return fetch.request<SaveViewSchemaRequest, SaveViewSchemaResponse>({
    url: '/views/save',
    method: 'post',
    data
  })
}
