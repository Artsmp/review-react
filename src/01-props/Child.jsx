import React from "react"

class Child extends React.Component {

    changeChild2Text = () => {
        this.props.changeChild2Text('子组件二的内容被我改变咯~~')
    }

    render() {
        return (
            <div>
                <h4>我是子组件一</h4>
                <button onClick={this.changeChild2Text}>我要改变子组件二咯</button>
            </div>
        )
    }
}

export default Child