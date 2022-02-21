import React from "react"
import Grandson from './Grandson'

class Parent extends React.Component {
    state = {
        text: '我是子组件的内容',
    }

    render() {
        return (
            <div style={{border: '1px solid #9f9', padding: '10px'}}>
                <h4>我是儿子：</h4>
                <Grandson />
            </div>
        );
    }
}

export default Parent;