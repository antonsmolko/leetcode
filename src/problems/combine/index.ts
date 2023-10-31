const combine = (n: number, k: number): number[][] => {
  const combinations:number[][] = []

  const _combine = (candidate: number[] = [], startNum: number = 1): void => {
    if (candidate.length === k) {
      combinations.push([...candidate])
      return
    }

    for (let num = startNum; num <= n; num += 1) {
      candidate.push(num)
      _combine(candidate, num + 1)
      candidate.pop()
    }
  }

  _combine()

  return combinations
}

export default combine
