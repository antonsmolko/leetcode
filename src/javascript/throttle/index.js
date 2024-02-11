const throttle = (fn, t) => {
    let throttle = false
    let nextArgs = null

    const dispatcher = (...args) => {
        fn(...args)
        throttle = true
        if (nextArgs) nextArgs = null
        setTimeout(handler, t)
    }

    const handler = () => {
        if (nextArgs) {
            dispatcher(...nextArgs)
        } else {
            throttle = false
        }
    }

    return function(...args) {
        if (throttle) {
            nextArgs = args
        } else {
            dispatcher(...args)
        }
    }
}

const throttled = throttle(console.log, 500)
const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

(
    async () => {
        throttled('log1')
        throttled('log2')
        throttled('log3')
        await sleep(600)
        throttled('log4')
        throttled('log5')
        await sleep(200)
        throttled('log6')
        await sleep(301)
        throttled('log7')
        throttled('log8')
    }
)()

const log = console.log

log('1')


const prm = () => new Promise((resolve) => {
    log('promise executor')

    resolve()
})

prm().then(() => {
    log('after promise')
})
setTimeout(() => {
    log('2')
    Promise.resolve().then(() => log('2 promise'))
})

setTimeout(() => {
    log('3')
})

log('4')

