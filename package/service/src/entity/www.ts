import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('www')
export class Site {
  @PrimaryColumn({
    comment: '站点id'
  })
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    comment: '站点名称',
    default: '  '
  })
    name: string

  constructor (body?: Partial<Site>) {
    Object.assign(this, body)
  }
}
