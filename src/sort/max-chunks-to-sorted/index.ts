const maxChunksToSorted = (arr: number[]): number => {
    let max = 0
    let count = 0

    for (let i = 0; i < arr.length; i += 1) {
        max = Math.max(max, arr[i])

        if (i === max) {
            count += 1
        }
    }

    return count
}

export default maxChunksToSorted