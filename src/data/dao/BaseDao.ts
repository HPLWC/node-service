import { getManager, getRepository } from 'typeorm'

export default class BaseDao<Model> {
  protected entityClass: Model

  constructor(entityClass: Model) {
    this.entityClass = entityClass
  }

  find(options: object) {
    const entityManager = getManager()

    // @ts-ignore
    options.order = options.order ? options.order : { addTime: 'DESC' }
    return entityManager.find(this.entityClass as any, options)
  }

  getRepository() {
    return getRepository<Model>(this.entityClass as any)
  }

  getManager() {
    return getManager()
  }
}
