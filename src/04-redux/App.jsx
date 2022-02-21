/* 
redux: 严格的单向数据流
- store：仓库
- action：仓库中的物品该怎么变化
- reducer：仓管，对仓库的货物进行操作处理
- view：消费者：消费者可能进行退货退款或者下单等操作，这些操作可以理解为派发一个action给仓管
action 必须要有一个 type 属性，告诉 [仓管] 要进行的是什么样的操作
dispatch 可以理解为下单操作
*/
import store from "./store"
import Child from './Child'
import React from 'react'

class App extends React.Component {
    state = {
        myText: store.getState().text
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                myText: store.getState().text
            })
        })
    }
    render() {
        return (
            <div>
                <h5>全局状态：{this.state.myText}</h5>
                <Child />
            </div>
        )
    }
}

export default App