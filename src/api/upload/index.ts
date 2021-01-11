import Router from 'koa-router'
import multer from '@koa/multer'

const storage = () => {
  return multer.diskStorage({
    destination: 'files/upload',
    filename(ctx: any, file: any, cb: Function) {
      console.log('file----------', file)
      cb(null, Date.now() + '.' + file.originalname)
    }
  })
}

function upload(ctx: any) {
  const params = ctx.req.file
  console.info('upload-params---------------', params)
  ctx.body = { code: 1 }
}

export default (routes: Router, prefix: string) => {
  routes.post(
    prefix + '/files',
    multer({
      storage: storage()
    }).single('file'),
    upload
  )
}
