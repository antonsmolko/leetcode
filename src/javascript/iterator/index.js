/**
 * Реализуйте итератор
 * @type {{[Symbol.iterator]: (function(): {next(): ({done: boolean, value})}), from: number, to: number}}
 */

let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]: function() {
        let from = this.from
        let to = this.to

        return {
            next() {
                if (from <= to) {
                    return {
                        done: false,
                        value: from++
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (let value of range) {
    console.log('value', value)
}

console.log(Math.max(...range))