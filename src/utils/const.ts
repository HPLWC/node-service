import { StatusCode_T } from '@/utils/utils'

export const PORT: number = 3344

export const STATUS_CODE: StatusCode_T[] = [
  { code: 200, message: '请求成功' },
  { code: 404, message: '未找到请求' },
  { code: 403, message: '无权限' },
  { code: 500, message: '服务器错误' }
]
