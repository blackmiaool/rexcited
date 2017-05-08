function CustomTextInput(props) {
    return (
        <div>
      <input ref={props.inputRef} />
    </div>
    );
}

function Parent(props) {
    return (
        <div>
      My input: <CustomTextInput inputRef={props.inputRef} />
    </div>
    );
}


class Grandparent extends React.Component {
    render() {
        return (
            <Parent
        inputRef={el => this.inputElement = el}
      />
        );
    }
}
ReactDOM.render(
    <Grandparent />,
    document.getElementById('root')
);
