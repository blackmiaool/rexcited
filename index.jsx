import React from 'react'
import {
    render
} from 'react-dom'
//const {
//    render
//} = ReactDOM;
import {
    Provider,
    connect
} from './react-redux/src/index.js'
import {
    createStore
} from 'redux'


const mapStateToProps = (state, ownProps) => {
    return {
        cnt: state.cnt
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch({
                type: "add",
                cnt: 1
            })
        }
    }
}



let store = createStore((state = {
    cnt: 0
}, action) => {
    switch (action.type) {
    case 'add':
        return {
            cnt: state.cnt + 1
        }
    default:
        return state
    }
});
class B extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return <div><p>{this.props.cnt}</p><button onClick={this.props.add}>+1s</button></div>;
    }
}

B = connect(
    mapStateToProps,
    mapDispatchToProps
)(B)

function App() {
    return <div>
        <B/>
        
    </div>;
}

render(
    <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)