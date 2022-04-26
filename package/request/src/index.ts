import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { pipe, ComposeFunction } from './utils'
export * from './utils'
export interface FetchInstanceOptions {
  prefix?: string;
  version?: string;
  pipe?: ComposeFunction[],
  onSuccess?: (res?: any) => void
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
      if (this.config?.pipe) {
        const pipeConfig = pipe(...this.config?.pipe)(config)
        return pipeConfig
      }
      return config
    })
  }

  private createResponseInterceptors () {
    this.instance.interceptors.response.use<Response<any>>((res) => {
      if (this.config?.onSuccess) {
        this.config?.onSuccess(res)
      }
      return res.data
    })
  }
}
