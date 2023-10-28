const getHappyString = (n: number, k: number): string => {
  const letters = 'abc'
  const counter: [number] = [k]

  const canAddLetter = (candidate: string[], letter: string) => {
    if (candidate.length === 0) return true
    return candidate[candidate.length - 1] !== letter
  }

  const stringify = (arr: string[]): string => {
    let str = ''
    for (let i = 0; i < arr.length; i += 1) {
      str += arr[i]
    }
    return str
  }

  const _getHappyString = (candidate: string[] = []): string => {
    if (candidate.length === n) {
      if (counter[0] === 1) return stringify(candidate)
      counter[0] -= 1
      return ''
    }

    for (let i = 0; i < letters.length; i += 1) {
      const letter = letters[i]
      if (!canAddLetter(candidate, letter)) continue

      candidate.push(letter)
      const word = _getHappyString(candidate)
      if (word.length > 0) return word
      candidate.pop()
    }

    return ''
  }

  return _getHappyString()
}

export default getHappyString
