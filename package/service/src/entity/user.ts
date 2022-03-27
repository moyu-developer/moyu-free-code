import { ApiProperty } from '@nestjs/swagger'
import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Generated
} from 'typeorm'

@Entity('user')
export class User {
  @PrimaryColumn({
    comment: '用户id'
  })
  @PrimaryGeneratedColumn()
  @ApiProperty({
    required: true,
    description: '用户id，随机生成的数据'
  })
    id: number

  @Column({
    comment: '用户名称'
  })
  @ApiProperty({
    required: true,
    description: '用户名称，具有唯一性'
  })
    name: string

  @Column({
    comment: '用户密码'
  })
  @ApiProperty({
    required: true,
    description: '用户密码'
  })

    password: string

  @Column({
    comment: '第三方平台的唯一code',
    nullable: true
  })
  @ApiProperty({
    required: false,
    description: '第三方平台的唯一code'
  })
    identifier: string // qq wx_openid github_id

  @Column({
    comment: '第三方平台的来源, 1: 微信，2:QQ，3:Github',
    nullable: true,
    enum: [1, 2, 3]
  })
  @ApiProperty({
    required: false,
    description: '第三方平台的来源, 1: 微信，2:QQ，3:Github',
    enum: [1, 2, 3]
  })
    source: 1 | 2 | 3

  @Column({
    comment: '用户头像',
    nullable: true
  })
  @ApiProperty({
    required: false,
    description: '用户头像'
  })
    avatar?: string

  constructor (body?: Partial<User>) {
    Object.assign(this, body)
  }
}
