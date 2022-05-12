import { User } from 'src/entity'
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

enum NavigationType {
  ACTIVITY
}

@Entity('navigation')
export class Navigation {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    length: 10,
    comment: '导航名称描述'
  })
    name: string

  type: 1
}
