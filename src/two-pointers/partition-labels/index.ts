const partitionLabels = (s: string): number[] => {
    const lastSeenMap = new Map<string, number>()

    for (let i = 0; i < s.length; i += 1) {
        lastSeenMap.set(s[i], i)
    }

    const partitions: number[] = []
    let startPartitionIndex = 0
    let furthestSeenIndex = lastSeenMap.get(s[0])

    for (let i = 0; i < s.length; i += 1) {
        const lastSeenIndex = lastSeenMap.get(s[i])

        // @ts-ignore
        furthestSeenIndex = Math.max(furthestSeenIndex, lastSeenIndex)

        if (i === furthestSeenIndex) {
            partitions.push(i + 1 - startPartitionIndex)

            startPartitionIndex = i + 1
        }
    }

    return partitions
}

export default partitionLabels