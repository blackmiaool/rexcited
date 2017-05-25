# Rexcited ![icon](http://blackmiaool.com/rexcited/icon2.png)

Lightweight React.

### Demo

[Test Rexcited with React Official Demos](http://blackmiaool.com/rexcited/test/demo.html)

### Feature

* Basically compatible with react.
* Less than 30k after minified.
* Support string style attribute(style="excited:1;").
* Support class attribute(class="excited").

### How to use it

##### Use it with `<script>`

`<script src="http://blackmiaool.com/rexcited/dist/react.js"></script>`
`<script src="http://blackmiaool.com/rexcited/dist/react-dom.js"></script>`

##### Use it with webpack

`npm i -S rexcited`

In your webpack.config.js:

```javascript
resolve:{
    alias: {
        'react/lib': 'rexcited/src/react/lib',
        'react-dom/lib': 'rexcited/src/react-dom/lib',
        react: 'rexcited/dist/react.js',
        'react-dom': 'rexcited/dist/react-dom.js',            
    },
},
```





