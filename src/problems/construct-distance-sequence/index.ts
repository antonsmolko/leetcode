const constructDistancedSequence = (n: number): number[] => {
  const sequence = Array(n * 2 - 1).fill(0)
  const usedNums: { [n: number]: boolean } = {}
  const iter = (startIndex: number = 0): boolean => {
    if (startIndex === sequence.length) return true

    if (sequence[startIndex] > 0) {
      return iter(startIndex + 1)
    }

    for (let num = n; num >= 1; num -= 1) {
      if (usedNums[num]) continue

      if (num === 1) {
        sequence[startIndex] = 1
      } else {
        if (startIndex + num >= sequence.length || sequence[startIndex + num] > 0) continue
        sequence[startIndex] = num
        sequence[startIndex + num] = num
      }

      usedNums[num] = true
      if (iter(startIndex + 1)) return true
      usedNums[num] = false

      sequence[startIndex] = 0
      if (num > 1) sequence[startIndex + num] = 0
    }

    return false
  }

  iter()

  return sequence
}

export default constructDistancedSequence
