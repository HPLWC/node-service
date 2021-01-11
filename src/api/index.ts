import Router from 'koa-router'

import { responseBody } from '@/utils/api'
import upload from './upload'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = responseBody({ data: { name: 'hplwc' }, code: 200 })
})
upload(router, '/upload')

export default router
