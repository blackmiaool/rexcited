import React from 'react';
import ReactDom from 'react-dom';

class A extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setState({
                a: 1
            })
        });
        this.state = {
            a: 0
        };
        console.log("A", this);
    }
    render() {
        return <B><div ref={(child)=>this.child=child}>outer child</div></B>;
        if (this.state.a) {
            return <div>
                <div ref="b">inner child</div>
            {this.props.children}
            </div>
        } else {
            return <div>
                <div ref="a">inner child</div>
            {this.props.children}
            </div>
        }

    }
}
class B extends React.Component {
    constructor(props) {
        super(props);
        console.log("B", this);
    }
    render() {
        return <div>{this.props.children}</div>
    }
}

ReactDom.render(
    <A></A>, document.querySelector("#root"));