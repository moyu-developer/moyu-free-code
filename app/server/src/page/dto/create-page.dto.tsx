import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  
  @ApiProperty({
    description: '创建时间'
  })
  createdAt: Date;

  @ApiProperty({
    description: '更新时间'
  })
  updatedAt: Date;

  @ApiProperty({
    description: '页面状态'
  })
  status: 0 | 1 | 2;


  @ApiProperty({
    description: '页面Schema内容'
  })
  content: string;
}
