import { Module } from 'module'

const originResolveFilename = (Module as any)._resolveFilename
const nodeAliasInstanceSymbol = Symbol('aliasSymbol')

interface AliasMaps {
  [key: string]: string
}

class Alias {
  private maps: AliasMaps

  constructor(maps: AliasMaps = {}) {
    this.maps = maps
    this.hack()
  }

  public setAlias(rules: AliasMaps = {}) {
    Object.assign(this.maps, rules)
  }

  // hack module import
  private hack() {
    const _ = this

    ;(Module as any)._resolveFilename = function() {
      const filename: string = arguments[0]
      const aliasKey = _.hasAliasArgs(filename)
      if (aliasKey)
        arguments[0] = filename.replace(aliasKey, _.maps[aliasKey])

      return originResolveFilename.call(this, ...arguments)
    }
  }

  private getAliasKeys(): string[] {
    return Object.keys(this.maps)
  }

  private hasAliasArgs(filename: string): string | undefined {
    return this.getAliasKeys().find(key => filename.startsWith(`${key}/`))
  }

}

let instance = (Module as any)[nodeAliasInstanceSymbol]
if (!instance)
  instance = (Module as any)[nodeAliasInstanceSymbol] = new Alias({})

export const set = instance.setAlias
export default instance
