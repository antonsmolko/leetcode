/**
 * Дан масси чисел
 * Найдите количество вариантов как набрать сумму targetSum используя вычитания и сложения
 */
const findTargetSumWays = (nums: number[], target: number): number => {
  const _targetSum = (sum: number = 0, startIndex: number = 0): number => {
    if (startIndex >= nums.length) {
      return Number(sum === target)
    }

    const num = nums[startIndex]
    const nextStartIndex = startIndex + 1

    return _targetSum(sum + num, nextStartIndex) + _targetSum(sum - num, nextStartIndex)
  }

  return _targetSum()
}

export default findTargetSumWays
