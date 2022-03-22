import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { resolve } from 'path'
import { View, User } from 'src/entity'

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  post: '5432',
  database: 'moyu',
  username: 'postgres',
  password: '123456',
  entities: [View, User],
  synchronize: true
}
