import React from "react";
import store from "./store";
class Child extends React.Component {
    changeText = () => {
        store.dispatch({
            type: 'TEST',
            payload: '子组件修改全局状态值'
        })
    }
    render() {
        return (
            <div style={{border: '1px solid #9f9', padding: '10px'}}>
                <h6>子组件：</h6>
                <div>
                    <button onClick={this.changeText}>修改全局状态值</button>
                </div>
            </div>
        )
    }
}

export default Child