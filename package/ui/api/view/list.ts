/**
 * @author wangly19
 * @description moyu-cli 自动生成接口成功
 * @version 1
 * @tag ViewModule
 */
import got from '@/common/utils/request'

/**
 * 页面列表查询参数
 * @export
 * @interface QueryViewListRequestDto
 */
export interface QueryViewListRequestDto {

  /**
   * 需要的数量
   * @memberof QueryViewListRequestDto
   */
   size: number;
   /**
    * 当前页码
    * @memberof QueryViewListRequestDto
    */
   current: number;
}

/**
 * 查询页面列表
 * @export
 * @interface QueryViewListResponseDto
 */
export interface QueryViewListResponseDto {
  /**
   * 请求信息
   * @memberof QueryViewListResponseDto
   */
  message: string;
  /**
   * 请求状态码，比对httpStatus，新增custom code
   * @memberof QueryViewListResponseDto
   */
  code: number;
  /**
   * 当前内容data
   * @memberof QueryViewListResponseDto
   */
  data: {
    /**
     * 总数
     * @memberof QueryViewListResponseDto
     */
    total: number;
    /**
     * 页面列表
     * @memberof QueryViewListResponseDto
     */
    list: Array<{
      id: number;
      name: string;
      description: string;
      background: string;
      schema: string;
      status: 0 | 1 | 2;
      env: 0 | 1 | 2;
      thumbnail?: string;
    }>;
  };
}

export default (params: QueryViewListRequestDto) => {
  return got.request<QueryViewListRequestDto, QueryViewListResponseDto>({
    url: '/views/list',
    method: 'GET',
    params
  })
}
