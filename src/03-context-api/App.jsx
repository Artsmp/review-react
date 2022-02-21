// React.createContext、Provider、Consumer。
import React from 'react'
import context from './context'
import Child from './Child'

const { Provider } = context

class App extends React.Component {

    state = {
        text: 'Hello Context API'
    }

    changeText = () => {
        this.setState({
            text: 'hello Context API new value'
        })
    }

    render() {
        return (
            <Provider value={{ text: this.state.text }}>
                <div style={{ border: '1px solid #f88', padding: '10px' }}>
                    <h4>App根组件</h4>
                    <button onClick={this.changeText}>修改全局状态值</button>
                    <Child />
                </div>
            </Provider>
        )
    }
}

export default App