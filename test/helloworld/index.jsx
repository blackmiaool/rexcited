function MyFunctionalComponent() {
    return <input />;
}

class Parent extends React.Component {
    render() {
        // This will *not* work!
        setTimeout(() => {
            console.log(this.refs)
        })
        return (
            <MyFunctionalComponent ref={(input) => { this.textInput = input; }} />);
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);
