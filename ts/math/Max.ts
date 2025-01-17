import type { IsEqual } from '../equal/equal.js'
import type { GreaterThan } from './GreaterThan.js'

export type Max<A extends number, B extends number, Fail = never> = GreaterThan<A, B> extends infer Result
	? IsEqual<Result, never> extends true
		? Fail
		: Result extends true
		? A
		: B
	: never
