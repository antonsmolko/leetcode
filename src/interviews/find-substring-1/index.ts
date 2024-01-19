const findSubstring1 = (reference: string, candidate: string): boolean => {
  let index = 0
  for (let i = 0; i < reference.length; i += 1) {
    if (reference[i] === candidate[index]) {
      index += 1
    }
    if (index === candidate.length) return true
  }
  return false
}

export default findSubstring1
