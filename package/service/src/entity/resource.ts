import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('resource')
export class Resource {
  @PrimaryColumn({
    comment: '资源id'
  })
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    comment: '资源名称',
    default: 1
  })
  @ApiProperty({
    title: '资源名称, 请务必填写',
    maxLength: 12
  })
    name: string

  @ApiProperty({
    title: '资源类型，1：图片，2:视频',
    enum: [1, 2]
  })
  @Column({
    comment: '资源类型，1：图片，2:视频',
    default: 1
  })
    type: 1 | 2

  @Column({
    comment: '资源oss地址',
    default: ''
  })
  @ApiProperty({
    title: '资源oss的额外属性，是一个简单的JSON串',
    enum: [1, 2]
  })
    link: string

  @Column({
    comment: '资源oss的额外属性，是一个简单的JSON串',
    nullable: true
  })
  @ApiProperty({
    title: '资源oss的额外属性，是一个简单的JSON串',
    enum: [1, 2]
  })
    extra?: string

  constructor (body?: Partial<Resource>) {
    Object.assign(this, body)
  }
}
