export interface StatusCode_T {
  code: number,
  message: string
}

export interface ResBodyArg_T {
  data?: object | undefined,
  code: number,
  error_msg?: string
}
