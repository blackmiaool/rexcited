import React from 'react'
import {
    render
} from 'react-dom'

class B extends React.Component {
    componentWillUnmount() {
        console.log("unmount");
    }
    render() {
        return <a>test</a>
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                a: 0
            })
        }, 1000)
    }
    componentWillUnmount() {
        console.log("unmount");
    }
    render() {

        return <div>{this.state.a && <B/> || null}</div>;


    }
}


render(
    <App />,
    document.getElementById('root')
)