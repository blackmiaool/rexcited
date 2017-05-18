import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6
import React from 'react';
import {
    render
} from 'react-dom'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['hello', 'world', 'click', 'me']
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
        this.setState({
            items: newItems
        });
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({
            items: newItems
        });
    }

    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
        ));
        console.log(items, React.Children.map([items], (child) => child));
        console.log(<div ref="1" key="2"></div>)
        return (
            <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
      
        </CSSTransitionGroup>
      </div>
        );
    }
}

//import { render } from 'react-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
//import App from './components/App'
//import reducer from './reducers'
//const store = createStore(reducer)

render(
    <TodoList/>,
    document.getElementById('root')
)