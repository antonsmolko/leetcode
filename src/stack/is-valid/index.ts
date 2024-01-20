const isValid = (s: string): boolean => {
    const brackets: { [key: string]: '(' | '[' | '{'} = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack: string[] = []
    const isClosingBracket = (bracket: string) => bracket in brackets

    for (let i = 0; i < s.length; i += 1) {
        const bracket = s[i]

        if (isClosingBracket(bracket)) {
            const prevBracket = stack.pop()
            const openingBracket = brackets[bracket]
            if (openingBracket !== prevBracket) return false
        } else {
            stack.push(bracket)
        }
    }

    return stack.length === 0
}

export default isValid