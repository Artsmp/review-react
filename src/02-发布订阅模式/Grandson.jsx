import React from "react";

class Parent extends React.Component {
    fn = () => {
        window.myEvent.emit('test', '来自孙子组件的内容')
    }

    render() {
        return (
            <div style={{border: '1px solid #99f', padding: '10px'}}>
                <h4>孙子：</h4>
                <p>我是孙子组件</p>
                <button onClick={this.fn}>点我改变爷爷的文字</button>
            </div>
        );
    }
}

export default Parent;