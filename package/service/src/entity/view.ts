import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('view')
export class View {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    length: 10
  })
    name: string

  @Column({
    length: 10
  })
    description?: string

  @Column({
    default: '#FFFFFF'
  })
    background?: string

  @Column({
    default: '{}'
  })
    schema: string

  @Column({
    default: 0,
    enum: [0, 1, 2]
  })
    status: number

    @Column({
      default: 0,
      enum: [0, 1, 2, 3]
    })
      env: number

    constructor (body?: Partial<View>) {
      Object.assign(this, body)
    }
}
