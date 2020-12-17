import { ResBodyArg_T } from '@/utils/utils'
import { STATUS_CODE } from '@/utils/const'

export const responseBody = (
  {
    data,
    code = 200,
    error_msg = ''
  }: ResBodyArg_T
  ) => {
  let status = getStatusCode(code)
  let pushErrorMsg = error_msg ? { error_msg } : {}

  return {
    data,
    ...status,
    ...pushErrorMsg
  }
}

function getStatusCode(code: number) {
  let defaultCode = { code, message: '' }
  return STATUS_CODE.find(_ => _.code === code) || defaultCode
}
