const countArrangement = (n: number): number => {
  const swap = (arr: number[], index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  const nums: number[] = []

  for (let i = 1; i <= n; i += 1) {
    nums.push(i)
  }

  const canPlaceDigit = (digit: number, index: number) => {
    return digit % (index + 1) === 0 || (index + 1) % digit === 0
  }

  const _permute = (startIndex: number = 0): number => {
    if (startIndex === n) return 1

    let count = 0

    for (let i = startIndex; i < nums.length; i += 1) {
      if (!canPlaceDigit(nums[i], startIndex)) continue

      swap(nums, startIndex, i)
      count += _permute(startIndex + 1)
      swap(nums, startIndex, i)
    }

    return count
  }

  return _permute()
}

export default countArrangement
