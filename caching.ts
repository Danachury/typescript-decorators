import { memoize } from 'memoize-cache-decorator'

/**
 * Should be replaced {@link memoize} implementation
 * @param target
 * @param {string} methodName
 * @param {PropertyDescriptor} descriptor
 */
const cache = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value
  let cache: Map<string, any> = new Map()
  descriptor.value = (...args: any[]) => {
    const key = JSON.stringify(args)
    if (cache.has(key))
      return cache.get(key)
    const originalMethodResult = originalMethod.apply(this, args)
    cache.set(key, originalMethodResult)
    return originalMethodResult
  }
}

class PersonRepository {

  @cache
  public async getById(personId: string): Promise<any> {
    // Wait 200ms -> Simulate database round trip
    const executor = (resolve: any) => setTimeout(resolve, 200)
    await new Promise(executor)
    return {
      id: personId,
      name: 'Jane Doe'
    }
  }
}

class Main {
  public async loadPersons() {
    console.time('Check loading speed')

    const personRepo = new PersonRepository()
    console.log(await personRepo.getById('jd'))
    console.log(await personRepo.getById('jd'))
    console.log(await personRepo.getById('jd'))
    console.log(await personRepo.getById('jd'))
    console.log(await personRepo.getById('je'))
    console.log(await personRepo.getById('je'))
    console.log(await personRepo.getById('je'))
    console.log(await personRepo.getById('je'))

    console.timeEnd('Check loading speed')
  }
}

new Main()
  .loadPersons()
  .finally()
