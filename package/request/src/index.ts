import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { isSuccess } from './utils'
export * from './utils'
export interface FetchInstanceOptions {
  prefix?: string;
  version?: string;
  middleware?: any[];
}
export interface Response<R> {
  message: string;
  code: number;
  data: R;
}

export class GotAxios {
  private instance: AxiosInstance
  private config!: FetchInstanceOptions | undefined
  constructor (
    initialConfig: AxiosRequestConfig,
    extraConfig?: FetchInstanceOptions
  ) {
    this.instance = axios.create(initialConfig)
    this.config = extraConfig
    this.createRequestInterceptors()
    this.createResponseInterceptors()
  }

  public request<S = any, R = any> (
    config: AxiosRequestConfig<S>,
    extraConfig?: Omit<FetchInstanceOptions, 'middleware'>
  ): Promise<R> {
    const version: string = extraConfig?.version || this?.config?.version || ''
    return this.instance.request({
      ...config,
      url: version + config.url
    })
  }

  private createRequestInterceptors () {
    this.instance.interceptors.request.use((config) => {
      return config
    })
  }

  private createResponseInterceptors () {
    this.instance.interceptors.response.use<Response<any>>((res) => {
      return res.data
    })
  }
}
