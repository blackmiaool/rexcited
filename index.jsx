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
    }
    render() {
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

ReactDom.render(
    <A><div>outer child</div></A>, document.querySelector("#root"));
