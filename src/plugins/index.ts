import path from 'path'
import instance from './alias'
import './dispatchLog'

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

instance.setAlias({
  '@': resolve('../../src')
})
