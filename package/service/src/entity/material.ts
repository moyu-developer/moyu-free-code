import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('material')
export class Material {
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
    path: string

  @Column()
    host: string

  constructor (body?: Partial<Material>) {
    Object.assign(this, body)
  }
}
