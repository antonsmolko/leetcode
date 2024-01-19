const generateParentheses = (n: number): string[] => {
    const parentheses: string[] = []

    const iter = (candidate: string = '', opened: number = n, closed: number = n): string[] => {
        if (opened > closed || opened < 0) return

        if (closed === 0 && opened === 0) {
            parentheses.push(candidate)
            return
        }

        iter(candidate + '(', opened - 1, closed)
        iter(candidate + ')', opened, closed - 1)
    }

    iter()

    return parentheses
}

export default generateParentheses