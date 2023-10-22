/**
 * Сгенерировать верные пары скобок
 */
const generateParentheses = (n: number): string[] => {
  const result: string[] = []

  const _generateParentheses = (candidate: string = '', left: number = n, right: number = n): void => {
    if (left > right || left < 0) return

    if (left === 0 && right === 0) {
      result.push(candidate)
      return
    }

    _generateParentheses(candidate + '(', left - 1, right)
    _generateParentheses(candidate + ')', left, right - 1)
  }

  _generateParentheses()

  return result
}

export default generateParentheses
