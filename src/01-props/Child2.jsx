import React from "react"

class Child2 extends React.Component {

    render() {
        return (
            <div>
                <h4>我是子组件二</h4>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Child2