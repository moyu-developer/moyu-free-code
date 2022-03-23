/**
 * 坚持请求是否成功
 * @param code 当前code码
 * @returns 请求是否成功
 */
export const isSuccess = (code: number): boolean => {
  if (code >= 200 && code < 300) return true
  return false
}

/**
 * 登录撞塌是否失效
 * @param code 当前code码
 * @returns 登录失效
 */
export const isLoginInvalid = (code: number) => code === 401

/**
 * 当前是否有权限
 * @param code 当前code码
 * @returns  无权限a
 */
export const isAuthInvalid = (code: number) => code === 403
