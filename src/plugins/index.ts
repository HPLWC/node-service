import path from 'path'
import instance from './alias'

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

instance.setAlias({
  '@': resolve('../../src'),
  '@utils': resolve('../../src/utils')
})
