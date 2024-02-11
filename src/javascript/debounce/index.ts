const debounce = <T extends Function>(fn: T, t: number) => {
    let timeout: ReturnType<typeof setTimeout>

    return function(...args: any) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), t)
    }
}

export default debounce