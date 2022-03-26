import {
  Entity,
  Column,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('Auths')
export class Auths {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    user_id: number

  @Column()
    identifier: string // qq wx_openid github_id

  @Column()
    login_type: string // wx qq github

  constructor (body?: Partial<Auths>) {
    Object.assign(this, body)
  }
}
