import React from "react";
import './EventEmitter';
import Child from './Child';

class Parent extends React.Component {

    componentDidMount() {
        window.myEvent.on('test', (arg) => {
            this.setState({
                text: arg
            })
        })
    }

    state = {
        text: '我是父组件的内容',
    }

    render() {
        return (
            <div style={{border: '1px solid #f99', padding: '10px'}}>
                <h4>我是父组件：{this.state.text}</h4>
                <Child />
            </div>
        );
    }
}

export default Parent;