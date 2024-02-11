import { describe, expect, test } from '@jest/globals'
import debounce from '.'
jest.useFakeTimers()

describe('javascript', () => {
    describe('debounce', () => {
        test('should work', () => {
            let start = performance.now()
            const wait = 50
            const calls = [
                { t: 50, inputs: [1] },
                { t: 75, inputs: [2] }
            ]

            function log(...inputs: any) {
                console.log([performance.now() - start, inputs ])
            }

            const dLog = debounce(log, wait)

            calls.forEach(({ inputs, t }) => {
                setTimeout(() => dLog(inputs), t)
            })
        })
    })
})