import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = { res: 'hplwc', code: 200 }
})

app.use(router.routes())

app.listen(3344, () => {
  console.log('port is already')
})