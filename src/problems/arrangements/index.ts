const arrangements = (str: string, k: number): string[] => {
  const letters: string[] = []

  for (let i = 0; i < str.length; i += 1) {
    letters.push(str[i])
  }

  const stringify = (arr: string[]): string => {
    let str = ''
    for(let i = 0; i < arr.length; i += 1) {
      str += arr[i]
    }
    return str
  }

  const swap = (arr: string[], index1: number, index2: number): void => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  const result: string[] = []

  const _arrangements = (candidate: string[], startIndex: number, localLetters: string[]): void => {
    if (startIndex === k) {
      result.push(stringify(candidate))
      return
    }

    for (let i = startIndex; i < localLetters.length; i += 1) {
      swap(localLetters, startIndex, i)
      const letter = localLetters[startIndex]
      candidate.push(letter)
      _arrangements(candidate, startIndex + 1, localLetters)
      candidate.pop()
      swap(localLetters, startIndex, i)
    }
  }

  _arrangements([], 0, letters)

  return result
}

export default arrangements
