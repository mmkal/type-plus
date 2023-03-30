import { type } from '../index.js'

test('union behavior of array', () => {
	type.equal<number[] | undefined, number[] | undefined>(true)
	type.equal<number[] | null, number[] | null>(true)
	type.equal<number[] | boolean, number[] | boolean>(true)
	type.equal<number[] | true, number[] | true>(true)
	type.equal<number[] | false, number[] | false>(true)
	type.equal<number[] | number, number[] | number>(true)
	type.equal<number[] | 1, number[] | 1>(true)
	type.equal<number[] | string, number[] | string>(true)
	type.equal<number[] | '', number[] | ''>(true)
	type.equal<number[] | symbol, number[] | symbol>(true)
	type.equal<number[] | bigint, number[] | bigint>(true)
	type.equal<number[] | 1n, number[] | 1n>(true)
	type.equal<number[] | {}, number[] | {}>(true)
	type.equal<number[] | { a: 1 }, number[] | { a: 1 }>(true)
	type.equal<number[] | string[], number[] | string[]>(true)
	type.equal<number[] | [], number[] | []>(true)
	type.equal<number[] | Function, number[] | Function>(true)
	type.equal<number[] | (() => void), number[] | (() => void)>(true)

	type.equal<number[] | any, any>(true)
	type.equal<number[] | unknown, unknown>(true)
	type.equal<number[] | never, number[]>(true)
	type.equal<number[] | void, number[] | void>(true)
})

test('intersection behavior of array', () => {
	type.equal<number[] & undefined, never>(true)
	type.equal<number[] & null, never>(true)

	type.equal<number[] & boolean, number[] & boolean>(true)
	type.equal<number[] & true, number[] & true>(true)
	type.equal<number[] & false, number[] & false>(true)
	type.equal<number[] & number, number[] & number>(true)
	type.equal<number[] & 1, number[] & 1>(true)
	type.equal<number[] & string, number[] & string>(true)
	type.equal<number[] & '', number[] & ''>(true)
	type.equal<number[] & symbol, number[] & symbol>(true)
	type.equal<number[] & bigint, number[] & bigint>(true)
	type.equal<number[] & 1n, number[] & 1n>(true)

	type.equal<number[] & {}, number[]>(true)

	type.equal<number[] & { a: 1 }, number[] & { a: 1 }>(true)
	type.equal<number[] & string[], number[] & string[]>(true)
	type.equal<number[] & [], number[] & []>(true)
	type.equal<number[] & Function, number[] & Function>(true)
	type.equal<number[] & (() => void), number[] & (() => void)>(true)

	type.equal<number[] & any, any>(true)
	type.equal<number[] & unknown, number[]>(true)
	type.equal<number[] & never, never>(true)
	type.equal<number[] & void, number[] & void>(true)
})
