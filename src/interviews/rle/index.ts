const firstEqualElements = (arr1: number[], arr2: number[]): number[] => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return []

    let arr2Index = 0
    const result = []

    const checkArr2Equal = (num) => {
        for (let i = arr2Index + 1; i < arr2.length; i += 1) {
            const arr2Num = arr2[i]
            if (num === arr2Num) {
                result.push(num)
                arr2Index = i
                return true
            }

            if (num > arr2Num) continue

            return false
        }

        return false
    }

    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2Index === arr2.length) break

        const arr1Num = arr1[i]
        const arr2Num = arr2[arr2Index]

        if (arr1Num === arr2Num) {
            result.push(arr1Num)
            arr2Index += 1
            continue
        }

        if (arr1Num < arr2Num) continue

        checkArr2Equal(arr1Num)
    }

    return result
}

export default firstEqualElements