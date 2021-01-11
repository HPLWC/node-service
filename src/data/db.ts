import Koa from 'koa'
import { createConnection } from 'typeorm'
import { DB_INFO, PORT } from '@/utils/const'

export const connection = async(app: Koa) => {
  createConnection({
    type: 'mysql',
    ...DB_INFO,
    entities: [ // 实体
      // __dirname + '/entity/*.ts'
    ]
  }).then(() => {
    console.log('数据库连接成功')
    app.listen(PORT)
    return true
  }).catch(err => {
    console.error('数据库连接异常', err)
    return false
  })
}
