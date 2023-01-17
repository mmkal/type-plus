import type { IsAny } from './IsAny.js'
import type { And, Or } from './logical.js'

/**
 * Checks if the two types are equal.
 */
export type Equal<A, B, Then = true, Else = false> = [A, B] extends [B, A]
  ? And<IsAny<A>, IsAny<B>,
    Then,
    Or<IsAny<A>, IsAny<B>, Else, Then>>
  : Else

/**
 * Checks if the two types are equal.
 */
export type IsEqual<A, B, Then = true, Else = false> = Equal<A, B, Then, Else>

/**
 * Check if the two types are not equal
 */
export type NotEqual<A, B, Then = true, Else = false> = Equal<A, B, Else, Then>

/**
 * Check if the two types are not equal
 */
export type IsNotEqual<A, B, Then = true, Else = false> = NotEqual<A, B, Then, Else>