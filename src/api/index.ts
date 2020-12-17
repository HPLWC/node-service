import Router from 'koa-router'
import { responseBody } from '@/utils/api'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = responseBody({ data: { name: 'hplwc' }, code: 200 })
})

export default router
