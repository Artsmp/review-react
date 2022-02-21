class EventEmitter {
    constructor() {
        this.eventMap = {}
    }

    // 监听某个事件
    on(eventType, cb) {
        if (typeof cb !== 'function') throw new TypeError('哥，请传入一个函数~~')
        this.eventMap[eventType] ? this.eventMap[eventType].push(cb) : this.eventMap[eventType] = [cb]
    }

    // 触发某个事件
    emit(eventType, arg) {
        const temp = this.eventMap[eventType]
        if (this.eventMap[eventType]) {
            temp.forEach(cb => {
                cb(arg)
            })
        }
    }

    // 移除某个事件的所有回调
    off(eventType) {
        delete this.eventMap[eventType]
    }

    // 移除某个事件下的单个回调
    remove(eventType, handler) {
        const temp = this.eventMap[eventType]
        if (temp) {
            // 使用无符号右移，-1 无符号右移的结果为 4294967295，这个数足够大，不会对原队列造成影响，就很秒 )
            temp.splice(temp.indexOf(handler) >>> 0, 1)
        }
    }
}

const myEvent = new EventEmitter()

window.myEvent = myEvent
// let fn = (arg) => {
//     console.log('我是test事件的监听函数，我被触发了', arg);
// }
// myEvent.on('test', fn)

// myEvent.emit('test', 123)