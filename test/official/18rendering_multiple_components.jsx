const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
    <li>{numbers}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);