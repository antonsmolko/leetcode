import { describe, expect, test } from '@jest/globals'
import solution from '.'
import fs from 'fs'
import path from 'path'

describe('maxSequence', () => {
    const data: [number, number][] = []
    const content = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8')

    content.split(/\r?\n/).forEach((line) =>  {
        // @ts-ignore
        data.push(line.split(' ').map(Number))
    })

    const matrix: [length: number, partitions: number[][], expected: [number,number]][] = [
        [166262, data, [6539, 287]],
    ]

    test.each(matrix)(
        'should work',
        (length, partitions, expected
        ): void => {
            expect(solution(length, partitions)).toEqual(expected);
        })
});

