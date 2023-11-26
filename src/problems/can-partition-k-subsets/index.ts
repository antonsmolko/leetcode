const canPartitionKSubsets = (nums: number[], k: number): boolean => {
  let totalSum = 0

  for (let i = 0; i < nums.length; i += 1) {
    totalSum += nums[i]
  }

  if (totalSum === 0 || totalSum % k > 0) return false

  const partitionSum = totalSum / k
  const sortedNums = nums.sort((a, b) => a - b)
  const subsets: number[] = Array(k).fill(0)

  const iter = (startIndex: number = nums.length - 1) => {
    if (startIndex === -1) return true

    for (let i = 0; i < k; i += 1) {
      if (i > 0 && subsets[i - 1] === subsets[i]) continue

      const num = sortedNums[startIndex]

      if (subsets[i] + num > partitionSum) continue

      subsets[i] += num

      if (iter(startIndex - 1)) return true

      subsets[i] -= num
    }

    return false
  }

  return iter()
}

export default canPartitionKSubsets
