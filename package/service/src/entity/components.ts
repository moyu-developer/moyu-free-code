import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('components')
export class Components {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
    id: number

  @Column({
    length: 10
  })
    name: string

  @Column()
    version: string

  
    @Column()
    description: string

  constructor (body?: Partial<Components>) {
    Object.assign(this, body)
  }
}
