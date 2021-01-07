import fs from 'fs'
import path from 'path'

import { Console_T } from '@/plugins/plugins'

const originConsole: Console_T<Function> = {
  log: console.log,
  error: console.error
}
const dispatchLogInstanceSymbol = Symbol('dispatchSymbol')

class dispatchLog {
  private path: string = ''

  private logName: Console_T<string> = {
    log: 'service.log',
    error: 'service.error.log'
  }

  constructor(filepath: string = '') {
    this.setPath(filepath)

    this.logHack()
    this.errorHack()
  }

  public setPath(filepath: string) {
    this.path = filepath ?
      this.getAbsolutePath(filepath)
      : path.resolve('./logs')
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

  private stdio(type: string, data: string | Buffer) {
    let fullPath = path.join(this.path, this.logName[type])
    let dateFormat = new Date().toLocaleDateString()
      + ' '
      + new Date().toTimeString().split(' ')[0]

    if (!fs.existsSync(this.path))
      fs.mkdirSync(this.path, { recursive: true })

    // 写入文件
    fs.writeFileSync(fullPath, `${dateFormat}\t\t${data}\n`, { flag: 'a' })
  }
}

let instance = (console as any)[dispatchLogInstanceSymbol]
if (!instance)
  instance = (console as any)[dispatchLogInstanceSymbol] = new dispatchLog('')

export default instance
