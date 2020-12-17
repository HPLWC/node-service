import Koa from 'koa'

import './plugins'
import router from './api'

import { PORT } from '@/utils/const'

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`port:${PORT} is already`)
})
