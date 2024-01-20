const findAnagrams = (s: string, p: string): number[] => {
    const map: { [char: string]: number } = {}

    for (let i = 0; i < p.length; i += 1) {
        const char = p[i]
        map[char] ??= 0
        map[char] += 1
    }

    const result = []
    const length = p.length

    const isAnagram = (startIndex: number): boolean => {
        const localMap = { ...map }
        for (let i = startIndex; i < startIndex + length; i += 1) {
            const char = s[i]

            if (localMap[char] === undefined || localMap[char] === 0) return false
            localMap[char] -= 1
        }

        return true
    }

    for (let i = 0; i < s.length; i += 1) {
        if (i + length > s.length) break

        if (isAnagram(i)) {
            result.push(i)
        }
    }

    return result
}

// const findAnagrams = (txt: string, pat: string): number[] => {
//     const n = txt.length;
  
//     // window size should equal to k
//     const k = pat.length;
  
//     // create map to store count of characters present in pattern
//     const charMap = new Map();
//     for (const p of pat) {
//       if (charMap.has(p)) {
//         const val = charMap.get(p);
//         charMap.set(p, val + 1);
//       } else {
//         charMap.set(p, 1);
//       }
//     }
//     // insitalise a count variable which hold distinct variable count
//     // inorder to save extra iteration on map to check if char occurenence is
//     // zero.
//     let count = charMap.size;
  
//     // intialise pointer to traverse on txt
//     // i pointer to be track starting point
//     // j pointer to traverse on each element
//     let i = 0;
//     let j = 0;
  
//     // store index of anagram's first char
//     let ans:number[]= [];
  
//     // run loop till j pointer is less than length of txt
//     while (j < n) {
//       // perform calculations
//       // store char j is pointing
//       const char = txt[j];
  
//       // 1. check if char is present in Map
//       // if yes, the decrement it's value
//       // and then check whether char becomes zero in map
//       // if yes then decrement count variable
//       // this will help us to check whether any angram is received
//       // or not till windowSize.
  
//       if (charMap.has(char)) {
//         const val = charMap.get(char);
//         charMap.set(char, val - 1);
//         if (charMap.get(char) === 0) {
//           count--;
//         }
//       }
  
//       // calculate windowSize\
//       const windowSize = j - i + 1;
  
//       // 1. if less than k increment j
//       if (windowSize < k) j++;
//       // 2. if equal to k then check count value is 0
//       // if yes, means we have encountered a anagram
//       // increment the ans count
//       // maintain the windowSize by incrementing i and j
//       // but before moving i
//       // check if txt[i] char is present in Map then increment
//       // the value, to ensure we can find other anagram in future
//       // so, we can perform the above checks again
//       else if (windowSize === k) {
//         if (count === 0) {
//           ans.push(i)
//         }
//         const char = txt[i];
//         if (charMap.has(char)) {
//           const val = charMap.get(char);
//           charMap.set(char, val + 1);
//           if (charMap.get(char) === 1) {
//             count++;
//           }
//         }
//         i++;
//         j++;
//       }
//     }
  
//     return ans;
// }

export default findAnagrams