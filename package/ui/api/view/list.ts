/**
 * @author wangly19
 * @description moyu-cli 自动生成接口成功
 * @version 1
 * @tag UserModule
 */
import got from '@/common/utils/request'

/**
  * 查询用户列表
  * @export
  * @interface QueryUserInfoResponseDto
  */
export interface QueryResponseDto {
   /**
    * 请求信息
    * @type {string}
    * @memberof QueryUserInfoResponseDto
    */
   message: string;
   /**
    * 请求状态码，比对httpStatus，新增custom code
    * @type {number}
    * @memberof QueryUserInfoResponseDto
    */
   code: number;
   /**
    * 当前内容data
    * @memberof QueryUserInfoResponseDto
    */
   data: {
     /**
     * 页面id，随机生成的数据
     */
     id: number;
     /**
     * 用户名称，具有唯一性
     */
      name: string;
     /**
     * 用户头像
     */
      avatar: string;
   };
 }

export default () => {
  return got.request<undefined, any>({
    url: '/user/info',
    method: 'GET'
  })
}
