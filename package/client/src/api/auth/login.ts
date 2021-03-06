/**
 * @author wangly19
 * @description moyu-cli 自动生成接口成功
 * @version 1
 * @tag AuthModule
 */
import got from '@/common/utils/request'

/**
 *
 * @export
 * @interface LoginReqDto
 */
export interface LoginReqDto {
  /**
   * 用户名
   * @type {string}
   * @memberof LoginReqDto
   */
  username?: string;
  /**
   * 用户密码
   * @type {string}
   * @memberof LoginReqDto
   */
  password?: string;

  /**
   * 来源
   * @type {0 | 1 | 2}
   * @description 0: 账户密码登录, 1: 码云, 2: gitee
   */
  source: 0 | 1 | 2

  /**
   * 第三方平台code
   */
  code?: string
}

/**
*
* @export
* @interface TokenDto
*/
export interface TokenDto {
  /**
   * 根据用户信息生成的token
   * @type {string}
   * @memberof TokenDto
   */
  token: string;
}

/**
*
* @export
* @interface LoginResDto
*/
export interface LoginResDto {
  /**
   * 请求信息
   * @type {string}
   * @memberof LoginResDto
   */
  message: string;
  /**
   * 请求状态码，比对httpStatus，新增custom code
   * @type {number}
   * @memberof LoginResDto
   */
  code: number;
  /**
   *
   * @type {TokenDto}
   * @memberof LoginResDto
   */
  data: TokenDto;
}

export default (data: LoginReqDto) => {
  return got.request<LoginReqDto, LoginResDto>({
    url: '/auth/login',
    method: 'POST',
    data
  })
}

export const oauthLogin = (data: LoginReqDto) => {
  return got.request<LoginReqDto, LoginResDto>({
    url: '/auth/oauth_login',
    method: 'POST',
    data
  })
}
