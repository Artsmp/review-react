import React from "react";
import context from './context'

const { Consumer } = context

class Parent extends React.Component {

    render() {
        return (
            <Consumer>
                {(state) => (<div style={{ border: '1px solid #99f', padding: '10px' }}>
                    <h4>我是孙子：</h4>
                    <p>全局状态值是：{state.text}</p>
                </div>)}
            </Consumer>
        );
    }
}

export default Parent;