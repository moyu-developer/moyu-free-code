import { ApiProperty } from '@nestjs/swagger'
import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import { View } from 'src/entity'

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
    comment: '平台的唯一code',
    nullable: true
  })
  @ApiProperty({
    required: false,
    description: '平台的唯一code'
  })
    identifier: string // qq wx_openid github_id

  @Column({
    comment: '来源,0: 默认 1: 码云，2:Github',
    nullable: true,
    enum: [0, 1, 2]
  })
  @ApiProperty({
    required: false,
    description: '来源,0: 默认 1: 码云，2:Github',
    enum: [0, 1, 2]
  })
    source: 0 | 1 | 2

  @Column({
    comment: '用户头像',
    nullable: true
  })
  @ApiProperty({
    required: false,
    description: '用户头像'
  })
    avatar?: string

    @OneToMany(() => View, (view) => view.user)
      views: View[]

    constructor (body?: Partial<User>) {
      Object.assign(this, body)
    }
}
