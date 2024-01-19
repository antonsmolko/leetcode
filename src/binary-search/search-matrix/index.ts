const searchMatrix = (matrix: number[][], target: number): boolean => {
    const rowCompare = (row: number[]): number => {
        if (row[0] <= target && row[row.length - 1] >= target) return 0
        if (row[0] < target) return -1
        return 1
    }

    const numCompare = (num: number): number => {
        if (num === target) return 0
        if (num < target) return -1
        return 1
    }
    const search = <T extends number[] | number>(arr: T[], comparator: (candidate: T) => number): T | null => {
        let s = 0
        let e = arr.length - 1

        while (s <= e) {
            const m = Math.trunc((s + e) / 2)
            const candidate = arr[m]

            if (comparator(candidate) === 0) return candidate
            if (comparator(candidate) === 1) {
                e = m - 1
            } else {
                s = m + 1
            }
        }

        return null
    }

    const row = search(matrix, rowCompare)

    if (!row) return false

    const num = search(row, numCompare)

    return num !== null
}

export default searchMatrix