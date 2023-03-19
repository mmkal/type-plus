import type { NumberType } from '../number_plus/number.js'
import type { IndexAt } from './array_plus.js'

/**
 * Gets the type of the array or tuple at index `N`.
 *
 * Like `Array.at()`, this type supports negative numbers.
 *
 * @alias ArrayPlus.At
 *
 * ```
 * import type { At } from 'type-plus'
 *
 * type R = At<[1, 2, 3], 2> // 3
 * type R = At<[1, 2, 3], -1> // 3
 * ```
 */
export type At<A extends Array<unknown>, N extends number, Fail = never> = IndexAt<A, N, Fail> extends infer I
	? I extends number
		? A[I]
		: Fail
	: never

/**
 * Concats two arrays.
 *
 * alias of: `[...A, ...B]`
 *
 * @alias ArrayPlus.Concat
 * ```
 * import type { Concat } form 'type-plus'
 *
 * type R = Concat<[1], [2, 3]> // [1, 2, 3]
 * ```
 */
export type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B]

/**
 * Check if the type `A` is an array type and not a tuple.
 *
 * ```
 * import type { ArrayType } from 'type-plus'
 *
 * type R = ArrayType<number[]> // true
 * type R = ArrayType<[1]> // false
 * ```
 */
export type ArrayType<A extends unknown[], Then = A, Else = never> = NumberType<A['length'], Then, Else>