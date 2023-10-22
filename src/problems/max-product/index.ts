/**
 * Полный перебор. Maximum Product of the Length of Two Palindromic Subsequences
 * Найти максимальное произведение длин полиндромных подпоследовательностей
 */
const maxProduct = (s: string): number => {
  const isPalindrome = (chars: string[]): boolean => {
    let start = 0
    let end = chars.length - 1

    while (start < end) {
      if (chars[start] !== chars[end]) return false
      start += 1
      end -= 1
    }

    return true
  }

  let result: number = 0
  const _maxProduct = (candidate1: string[] = [], candidate2: string[] = [], startIndex: number = 0): void => {
    if (startIndex >= s.length) {
      if (isPalindrome(candidate1) && isPalindrome(candidate2)) {
        result = Math.max(result, candidate1.length * candidate2.length)
      }
      return
    }

    const char = s[startIndex]

    candidate1.push(char)
    _maxProduct(candidate1, candidate2, startIndex + 1)
    candidate1.pop()

    candidate2.push(char)
    _maxProduct(candidate1, candidate2, startIndex + 1)
    candidate2.pop()

    _maxProduct(candidate1, candidate2, startIndex + 1)
  }

  _maxProduct()

  return result
}

export default maxProduct
