import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios'

export interface FetchInstanceOptions extends AxiosRequestConfig {
  prefix?: string;
  version?: string;
}

export class Fetch {
  private instance: AxiosInstance
  private options: FetchInstanceOptions | undefined
  constructor (options?: FetchInstanceOptions) {
    this.options = options
    this.instance = axios.create({
      timeout: options?.timeout,
      baseURL: options?.baseURL,
      headers: options?.headers
    })
  }

  test () {
    console.log(this.options)
  }

  fetch <S, R> (payload: AxiosRequestConfig<S> & { version?: string}): AxiosPromise<R> {
    const { version = '' } = this?.options || payload || {}

    return this.instance({
      ...payload,
      url: payload?.url + version
    })
  }
}
