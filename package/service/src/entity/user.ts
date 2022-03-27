import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Generated
} from 'typeorm'

@Entity('user')
export class User {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
    id: number

  @Generated('uuid')
    uid: string

  @Column()
    name: string

  @Column()
    identifier: string // qq wx_openid github_id

  @Column()
    login_type: string // wx qq github

  @Column()
    password: string

  @Column()
    avatar?: string

  constructor (body?: Partial<User>) {
    Object.assign(this, body)
  }
}
