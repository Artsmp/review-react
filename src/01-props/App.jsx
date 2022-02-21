import React from "react";
import Child from "./Child";
import Child2 from "./Child2";

class Parent extends React.Component {
    state = {
        text: '我是子组件二的内容',
    }

    changeChild2Text = (text) => {
        this.setState({
            text,
        })
    }

    render() {
        return (
            <div>
                <p>我只是个传声筒：{this.state.text}</p>
                <Child changeChild2Text={this.changeChild2Text} />
                <Child2 text={this.state.text} />
            </div>
        );
    }
}

export default Parent;