/**
 * Реализовать очередь асинхронных действий с ограничением по количеству параллельно выполняемых задач
 * processTask - функция обработчик. Задача считается выполненной после вызова callback
 * paralleledTask - количество параллельно обрабатываемых задач
 * whenEmpty - функция-callback вызываемая по окончании обработки всех задач
 */

class Queue {
    tasks = []

    constructor(processTask, paralleledTask, whenEmpty) {
        this.processTask = processTask
        this.processCount = paralleledTask
        this.emptyCallback = whenEmpty
    }

    add(task) {
        this.tasks.push(task)
    }

    async loop() {
        if (this.tasks.length === 0) {
            this.emptyCallback()
        }

        const processes = Array(this.processCount).fill(null).map(this.dispatcher.bind(this))

        await Promise.all(processes)

        this.emptyCallback()
    }

    async dispatcher() {
        let task = null

        while (task = this.tasks.shift()) {
            await new Promise((resolve) => this.processTask(task, resolve))
        }
    }
}

const processTask = (task, resolve) => {
    // время обработки задачи от 500 до 1000мс
    const workTime = 500 + Math.floor(Math.random()*500)

    setTimeout(() => {
        console.log(task)
        resolve()
    }, workTime)
}
const paralleledTasks = 2
const whenEmpty = () => console.log('Queue is empty')

const queue = new Queue(processTask, paralleledTasks, whenEmpty)

queue.add('task 1')
queue.add('task 2')
queue.add('task 3')
queue.loop()


// class EventEmitter {
//     listeners = {}
//
//     constructor(dispatcher) {
//         this.dispatcher = dispatcher ?? ((fn, payload) => { fn(payload) })
//     }
//
//     addEventListeners(event, listener) {
//         this.listeners[event] ??= []
//         this.listeners[event].push(listener)
//     }
//
//     dispatchEvent(event, payload) {
//         const eventListeners = this.listeners[event] ?? []
//
//         eventListeners.forEach((listener) => this.dispatcher(listener, payload))
//
//         return (event) => {
//             delete this.listeners[event]
//         }
//     }
// }