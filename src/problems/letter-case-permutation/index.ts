/**
 * Регистр букв
 */
const letterCasePermutation = (s: string): string[] => {
  const result: string[] = []

  const _letterCasePermutation = (candidate: string = '', startIndex: number = 0): void => {
    if (startIndex === s.length) {
      result.push(candidate)
      return
    }

    const letter = s[startIndex]

    const isDigit = Number.isInteger(parseInt(letter))

    if (isDigit) {
      _letterCasePermutation(candidate + letter, startIndex + 1)
      return
    }

    _letterCasePermutation(candidate + letter.toLowerCase(), startIndex + 1)
    _letterCasePermutation(candidate + letter.toUpperCase(), startIndex + 1)
  }

  _letterCasePermutation()

  return result
}

export default letterCasePermutation
