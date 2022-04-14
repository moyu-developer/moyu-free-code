import { User } from 'src/entity'
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity('view')
export class View {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    length: 10,
    comment: '页面名称'
  })
    name: string

  @Column({
    length: 10,
    nullable: true,
    comment: '页面描述'
  })
    description?: string

  @Column({
    nullable: true,
    comment: '页面图片'
  })
    thumbnail?: string

  @Column({
    default: '#FFFFFF',
    nullable: true,
    comment: '页面背景'
  })
    background?: string

  @Column({
    default: '{}',
    comment: '页面结构体'
  })
    schema: string

  @Column({
    default: 0,
    enum: [0, 1, 2],
    comment: '页面状态'
  })
    status: number

    @Column({
      default: 0,
      enum: [0, 1, 2, 3],
      comment: '页面环境'
    })
      env: number

      @ManyToOne(() => User, (user) => user.views)
        user: User

      constructor (body?: Partial<View>) {
        Object.assign(this, body)
      }
}
