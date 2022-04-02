
/**
 * 获取url参数
 * @param url
 * @param params
 * @returns
 */
export const getParams = (url:string, params:string) => {
  const res = new RegExp('(?:&|/?)' + params + '=([^&$]+)').exec(url)
  return res ? res[1] : ''
}
