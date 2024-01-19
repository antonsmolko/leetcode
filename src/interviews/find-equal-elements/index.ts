const rle = (s: string): string => {
    let result = ''
    let currentChar = s[0]
    let counter = 1

    for (let i = 1; i <= s.length; i += 1) {
        if (s[i] !== currentChar) {
            result += counter > 1 ? `${currentChar}${counter}` : currentChar
            currentChar = s[i]
            counter = 1
        } else {
            counter += 1
        }
    }

    return result
}

export default rle