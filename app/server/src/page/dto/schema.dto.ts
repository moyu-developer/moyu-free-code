import { ApiProperty } from "@nestjs/swagger";

export class PageModelDto {

  @ApiProperty({
    description: '页面id'
  })
  id: number

  @ApiProperty({
    description: '页面code'
  })
  code: string

  @ApiProperty({
    description: '页面标题'
  })
  title: string
  
  @ApiProperty({
    description: '创建时间',
  })
  createdAt: Date;

  @ApiProperty({
    description: '更新时间'
  })
  updatedAt: Date;

  @ApiProperty({
    description: '页面状态',
    default: 0
  })
  status: 0 | 1 | 2;

  @ApiProperty({
    description: '页面Schema内容'
  })
  content: string;
}
