import fs from 'fs'
import path from 'path'

import { Console_T } from '@/plugins/plugins'

const originConsole: Console_T<Function> = {
  log: console.log,
  error: console.error
}

class dispatchLog {
  private path: string = ''

  private logName: Console_T<string> = {
    log: 'service.log',
    error: 'service.error.log'
  }

  constructor(filepath: string = '') {
    this.path = filepath ?
      this.getAbsolutePath(filepath)
      : path.resolve('./logs')

    this.logHack()
    this.errorHack()
  }

  private getAbsolutePath(filepath: string) {
    let isRoot = !~filepath.search(/^[.\/\\]/)
    return isRoot ? filepath : path.join(__dirname, filepath)
  }

  private errorHack() {
    let that = this
    console.error = function() {
      let oneLine = Array.from(arguments).map(_ => _.toString()).join(',')
      that.stdio('error', oneLine)

      // 执行原内置函数
      originConsole.error.call(this, ...arguments)
    }
  }

  private logHack() {
    let that = this
    console.log = function() {
      let oneLine = Array.from(arguments).map(_ => _.toString()).join(',')
      that.stdio('log', oneLine)

      originConsole.log.call(this, ...arguments)
    }
  }

  stdio(type: string, data: string | Buffer) {
    let fullPath = path.join(this.path, this.logName[type])

    if (!fs.existsSync(this.path))
      fs.mkdirSync(this.path, { recursive: true })

    // 写入文件
    fs.writeFileSync(fullPath, data, { flag: 'a' })
  }
}

export default new dispatchLog('')
