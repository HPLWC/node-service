import Koa from 'koa'
import Router from 'koa-router'

import './plugins'
import { PORT } from '@/utils/const'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = { res: 'hplwc', code: 200 }
})

app.use(router.routes())

app.listen(PORT, () => {
  console.log('port is already')
})
