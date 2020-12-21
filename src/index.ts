import Koa from 'koa'

import './plugins'
import router from './api'
import { connection } from '@/data/db'

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

connection(app)
