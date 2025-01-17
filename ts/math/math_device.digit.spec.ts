import { it } from '@jest/globals'
import { testType } from '../index.js'
import type { MathDevice } from './math_device.js'

it('adds single digit', () => {
	testType.equal<MathDevice.DigitAdd<0, 0>, 0>(true)
	testType.equal<MathDevice.DigitAdd<0, 1>, 1>(true)
	testType.equal<MathDevice.DigitAdd<0, 9>, 9>(true)
	testType.equal<MathDevice.DigitAdd<1, 0>, 1>(true)
	testType.equal<MathDevice.DigitAdd<1, 9>, 10>(true)
	testType.equal<MathDevice.DigitAdd<9, 9>, 18>(true)
})

it('subtracts single digit', () => {
	testType.equal<MathDevice.DigitSubtract<0, 0>, 0>(true)
	testType.equal<MathDevice.DigitSubtract<0, 1>, -1>(true)
	testType.equal<MathDevice.DigitSubtract<0, 9>, -9>(true)
	testType.equal<MathDevice.DigitSubtract<1, 0>, 1>(true)
	testType.equal<MathDevice.DigitSubtract<1, 9>, -8>(true)
	testType.equal<MathDevice.DigitSubtract<9, 9>, 0>(true)
})

it('multiply single digit', () => {
	testType.equal<MathDevice.DigitMultiply<0, 0>, 0>(true)
	testType.equal<MathDevice.DigitMultiply<0, 1>, 0>(true)
	testType.equal<MathDevice.DigitMultiply<0, 9>, 0>(true)

	testType.equal<MathDevice.DigitMultiply<1, 0>, 0>(true)
	testType.equal<MathDevice.DigitMultiply<1, 1>, 1>(true)
	testType.equal<MathDevice.DigitMultiply<1, 9>, 9>(true)

	testType.equal<MathDevice.DigitMultiply<9, 0>, 0>(true)
	testType.equal<MathDevice.DigitMultiply<9, 1>, 9>(true)
	testType.equal<MathDevice.DigitMultiply<9, 9>, 81>(true)
})
