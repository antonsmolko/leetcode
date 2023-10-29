const permuteUnique = (nums: number[]): number[][] => {
  const swap = (arr: number[], index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  const permutations: number[][] = []

  const _permuteUnique = (candidate: number[], startIndex: number = 0) => {
    if (startIndex === nums.length - 1) {
      const permutation = []
      for (let i = 0; i < candidate.length; i += 1) {
        permutation.push(candidate[i])
      }
      permutations.push(permutation)
    }

    type TCache = {
      [k: string]: boolean
    }
    const cache: TCache = {}
    for (let i = startIndex; i < nums.length; i += 1) {
      if (cache[candidate[i]]) continue
      cache[candidate[i]] = true

      swap(candidate, startIndex, i)
      _permuteUnique(candidate, startIndex + 1)
      swap(candidate, startIndex, i)
    }
  }

  _permuteUnique(nums)

  return permutations
}

export default permuteUnique
