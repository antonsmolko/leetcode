const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
    let last1Index = m - 1
    let last2Index = n - 1

    for (let i = nums1.length - 1; i >= 0; i -= 1) {
        const num1 = nums1[last1Index] ?? -Infinity
        const num2 = nums2[last2Index] ?? -Infinity

        if (num1 >= num2) {
            nums1[i] = num1
            last1Index -= 1
        } else {
            nums1[i] = num2
            last2Index -= 1
        }
    }
}

export default merge