import path from 'path'
import alias from './alias'
import dispatchLog from './dispatchLog'

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

alias.setAlias({
  '@': resolve('../../src')
})

dispatchLog.setPath('')
