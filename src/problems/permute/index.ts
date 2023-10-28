const permute = (nums: number[]): number[][] => {
  const swap = (arr: number[], index1: number, index2: number) => {
    const tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp
  }

  const permutations: number[][] = []

  const _permute = (startIndex: number = 0, candidate: number[]) => {
    if (startIndex === nums.length - 1) {
      const permutation = []
      for (let i = 0; i < candidate.length; i += 1) {
        permutation.push(candidate[i])
      }
      permutations.push(permutation)
    }

    for (let i = startIndex; i < nums.length; i += 1) {
      swap(candidate, startIndex, i)
      _permute(startIndex + 1, candidate)
      swap(candidate, startIndex, i)
    }
  }

  _permute(0, nums)

  return permutations
}

export default permute
