import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('www')
export class Site {
  @PrimaryColumn({
    comment: '资源id'
  })
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    comment: '名称',
    default: ''
    })

  constructor (body?: Partial<Site>) {
    Object.assign(this, body)
  }
}
