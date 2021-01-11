import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import cors from '@koa/cors'

import './plugins'
import router from './api'
import { connection } from '@/data/db'

const app = new Koa()

app
  .use(cors({ credentials: true, origin: '*' })) // 跨域中间件
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods())

connection(app)
