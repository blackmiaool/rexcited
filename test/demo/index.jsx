import React from 'react';
import {
    Component
} from 'react';
import ReactDOM from 'react-dom';
const context = require.context("../official", false, /\.jsx$/);


function path2name(path) {
    path = path.match(/\d+([\w']+)/)[1];

    function replace(match, header) {
        if (match[0] === '_') {
            return ' ' + header.toUpperCase()
        } else {
            return header.toUpperCase()
        }

    }
    return path.replace(/^(\w)/, replace).replace(/_(\w)/g, replace);
}

const testCases = context.keys().slice().sort(function (a, b) {
    const reg = /\.\/(\d+)/;
    a = a.match(reg)[1] * 1;
    b = b.match(reg)[1] * 1;
    return a - b;
}).map(key => ({
    path: key,
    name: path2name(key),
    code: context(key)
}));

Object.keys(testCases).forEach(function (i) {
    const testCase = testCases[i];
    testCases[testCase.name] = testCase;
    delete testCases[i];
});


function bindThis(that, arr) {
    arr.forEach((funcName) => {
        that[funcName] = that[funcName].bind(that)
    });
}
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<ul id="case-select">
                    {this.props.list.map(li=>(<li><button onClick={this.props.onSelect.bind(undefined,li)}>{li}</button></li>))}            
        </ul>);
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    onEditor(ref) {

        setTimeout(() => {
            this.editor = CodeMirror.fromTextArea(ref, {
                lineNumbers: true,
                mode: "jsx"
            });
            this.editor.on("change", (editor) => {
                const code = editor.getValue();
                this.code = code;
                this.props.onChange(code);
            });
        }, 100);

    }
    componentWillReceiveProps(props) {
        if (props.code === this.code) {
            return;
        }
        this.editor && this.editor.setValue(props.code)
    }

    render() {
        return (<div style="display:inline-block;" id="editor">
            <textarea ref={this.onEditor} name="" id="" cols="50" rows="30"  value={this.props.code}></textarea>
        </div>);
    }
}

const preScript = ` var origin = location.origin;
        parent.postMessage(name, origin);
        var interval_id = setInterval(function(){}, 1e5);
        for (var i = 1; i <= interval_id; i++){
            clearInterval(i);            
        } `;
class App extends React.Component {
    constructor(props) {
        super(props);
        bindThis(this, ['onSelect', 'onChange']);
        this.list = []
        for (const name in testCases) {
            this.list.push(name);
        }
        setTimeout(() => {
            this.updatePreview();
        }, 100);
        window.addEventListener('message', (e) => {
            var msg = e.data;
            const obj = {
                [msg]: true
            };
            this.setState(obj);
        });
    }
    componentDidMount() {
        this.setState({
            code: `ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);`
        });

    }
    setCode(iframe, code) {
        const doc = iframe.contentDocument;
        doc.open();
        doc.write(code);
        doc.close();
    }
    updatePreview() {
        console.trace('updatePreview');
        if (!this.refs.preview) {
            return;
        }
        this.setState({
            react: false,
            rexcited: false,
        });
        setTimeout(() => {
            this.setCode(this.refs['preview'], `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="../dist/react.js"></script>
    <script src="../dist/react-dom.js"></script>
    <script src="demo/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script>
        var name='rexcited';
        ${preScript}
    </script>
    <script type="text/babel">${this.state.code}</script>
</body>
</html>
`);
            this.setCode(this.refs['preview-original'], `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="demo/react.js"></script>
    <script src="demo/react-dom.js"></script>
    <script src="demo/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script>
        var name='react';
        ${preScript}
    </script>
    <script type="text/babel">${this.state.code}</script>
</body>
</html>
`);
        });
    }
    onSelect(name) {
        const code = testCases[name].code;
        if (code === this.state.code) {
            return;
        }

        this.setState({
            code
        });
        this.updatePreview();
    }
    onChange(code) {
        if (code.replace(/\s/g, '') === this.state.code.replace(/\s/g, '')) {
            return;
        }

        this.setState({
            code
        });
        if (this.previewTimeout) {
            clearTimeout(this.previewTimeout);
            this.previewTimeout = 0;
        }
        this.previewTimeout = setTimeout(() => {
            this.updatePreview();
        }, 1000);
    }
    render() {


        return (<div>
            <Header list={this.list} onSelect={this.onSelect}/>
            <Editor onChange={this.onChange} code={this.state.code}/>
            <div id="preview">
                <h5 class="top-indicator">Rexcited↓</h5>
                <div class="preview top">                    
                    <div class="loading-text"><h1>Loading...</h1></div>
                    <iframe style={{opacity:this.state.rexcited?1:0.1,'vertical-align': 'top'}} ref="preview" class="top-iframe" src="./demo/iframe.html?name=rexcited" frameborder="0"></iframe>
                </div>
                <div class="preview bottom">                    
                    <div class="loading-text"><h1>Loading...</h1></div>
                    <iframe style={{opacity:this.state.react?1:0.1,'vertical-align': 'top'}} ref="preview-original" src="./demo/iframe.html?name=react" frameborder="0"></iframe>
                </div>
                <h5 class="bottom-indicator">React↑</h5>
            </div>
            
        </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
