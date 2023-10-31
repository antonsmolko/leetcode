const maxCompatibilitySum = (students: number[][], mentors: number[][]): number => {
  let maxSum = 0

  const swap = (arr: number[][], index1: number, index2: number): void => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  const getSum = (arr1: number[], arr2: number[]): number => {
    let sum = 0
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] === arr2[i]) sum += 1
    }

    return sum
  }

  const iter = (candidate: number[][], startIndex: number = 0, localSum: number = 0) => {
    if (startIndex === students.length) {
      maxSum = Math.max(maxSum, localSum)
      return
    }

    for (let i = startIndex; i < students.length; i += 1) {
      swap(students, startIndex, i)
      const newSum = localSum + getSum(students[startIndex], mentors[startIndex])
      iter(students, startIndex + 1, newSum)
      swap(students, startIndex, i)
    }
  }

  iter(students)

  return maxSum
}

export default maxCompatibilitySum
