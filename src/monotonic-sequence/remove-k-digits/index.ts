const removeKDigits = (num: string, k: number): string => {
    if (num.length === k) return '0'

    const sequence: number[] = []
    let localK = k

    const addToIncreasingSequence = (arr: number[], num: number) => {
        while (arr.length > 0 && localK > 0) {
            if (num >= arr[arr.length - 1]) break
            arr.pop()
            localK -= 1
        }

        arr.push(num)
    }

    for (let i = 0; i < num.length; i += 1) {
        addToIncreasingSequence(sequence, Number(num[i]))
    }

    while(localK > 0) {
        sequence.pop()
        localK -= 1
    }

    return sequence.join('').replace(/^0*/, '') || '0'
}

export default removeKDigits