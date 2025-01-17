import type { TupleType } from '../tuple/tuple_type.js'

/**
 * Returns the last type in the array or tuple that matches the `Criteria`.
 *
 * If the `Criteria` is not met, it will return `never'.
 *
 * For `Array<T>`, it will return `T | undefined` if `T` satisfies `Criteria`.
 *
 * @example
 * ```ts
 * ArrayPlus.Find<Array<1 | 2 | 'x'>, number> // 1 | 2 | undefined
 *
 * ArrayPlus.Find<[true, 123, 'x', 321], number> // 321
 * ```
 */
export type FindLast<A extends Array<any>, Criteria> = TupleType<
	A,
	A['length'] extends 0
		? never
		: A extends [...infer Heads, infer Last]
		? Last extends Criteria
			? Last
			: FindLast<Heads, Criteria>
		: never,
	A extends Array<infer T> ? (T extends Criteria ? T | undefined : never) : never
>
