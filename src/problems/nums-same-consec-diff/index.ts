/**
 * Регистр букв
 */
const numsSameConsecDiff = (count: number, diff: number): number[] => {
  const concatDigits = (digit1: number, digit2: number): number => digit1 * 10 + digit2

  const result: number[] = []
  const _numsSaveConsecDiff = (candidate: number, digitsCount: number = count) => {
    if (digitsCount === 1) {
      result.push(candidate)
      return
    }

    const lastDigit = candidate % 10

    if (diff === 0) {
      const num = concatDigits(candidate, lastDigit)
      _numsSaveConsecDiff(num, digitsCount - 1)
      return
    }

    if (lastDigit + diff <= 9) {
      const num = concatDigits(candidate, lastDigit + diff)
      _numsSaveConsecDiff(num, digitsCount - 1)
    }

    if (lastDigit - diff >= 0) {
      const num = concatDigits(candidate, lastDigit - diff)
      _numsSaveConsecDiff(num, digitsCount - 1)
    }
  }

  for (let digit = 1; digit <= 9; digit += 1) {
    _numsSaveConsecDiff(digit)
  }

  return result
}

export default numsSameConsecDiff
