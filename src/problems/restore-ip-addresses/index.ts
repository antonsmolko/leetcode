const restoreIpAddresses = (s: string): string[] => {
    const isValidOctet = (octet: string) => {
        if (octet.length === 1) return true
        if (octet[0] === '0') return false

        return parseInt(octet) <= 255
    }

    const ips: string[] = []

    const iter = (candidate: string[] = [], startIndex: number = 0) => {
        if (candidate.length === 4 && startIndex === s.length) {
            ips.push(candidate.join('.'))
            return
        }

        if (candidate.length === 4 || startIndex === s.length) return

        const length = Math.min(s.length, startIndex + 3)

        for (let i = startIndex; i < length; i += 1) {
            const octet = s.slice(startIndex, i + 1)

            if (!isValidOctet(octet)) return false

            candidate.push(octet)
            iter(candidate, i + 1)
            candidate.pop()
        }
    }

    iter()

    return ips
}

export default restoreIpAddresses
