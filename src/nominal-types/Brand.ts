// By Drew Colthorp, <https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/#comment-604580>
// <https://gist.github.com/dcolthorp/aa21cf87d847ae9942106435bf47565d>

import { AnyRecord } from '../any-types'

/**
 * Create a "branded" version of a type.
 * TypeScript won't allow implicit conversion to this type
 */
export type Brand<BrandT extends string, T extends AnyRecord> = T & { _type: BrandT }

export function brand<B extends string, T extends AnyRecord>(type: B, subject?: T): Brand<B, T> {
  (subject as any)._type = type
  return subject as any
}

export function createBrandCreator<BrandT extends string, T>(): (value: T) => Brand<BrandT, T> {
  return (value: T): Brand<BrandT, T> => {
    return value as any
  }
}