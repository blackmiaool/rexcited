import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <QueueAnim>
    <div key="1">enter in queue</div>
    <div key="2">enter in queue</div>
    <div key="3">enter in queue</div>
  </QueueAnim>, document.querySelector("#root"));

//import Tween from 'rc-tween-one';
//import React from 'react';
//import ReactDom from 'react-dom';
//import BezierPlugin from './tween-one/src/plugin/BezierPlugin';
//console.dir(Tween)
//Tween.plugins.push(BezierPlugin);
//class Demo extends React.Component {
//    constructor() {
//        super(...arguments);
//    }
//
//    render() {
//        return (<div style={{ position: 'relative', height: 300 }}>
//      <Tween
//        animation={{
//          bezier: { type: 'thru', autoRotate: true,
//            vars: [{ x: 200, y: 200 }, { x: 400, y: 0 }, { x: 600, y: 200 }, { x: 800, y: 0 }],
//          },
//          duration: 5000,
//        }}
//        style={{ width: 100 }}
//      >
//        <div>执行动效</div>
//      </Tween>
//      <div
//        style={{ width: 5, height: 5, background: '#000',
//          position: 'absolute', top: 0, transform: 'translate(200px,200px)',
//        }}
//      />
//      <div
//        style={{ width: 5, height: 5, background: '#000', position: 'absolute',
//          top: 0, transform: 'translate(400px,0px)',
//        }}
//      />
//      <div
//        style={{ width: 5, height: 5, background: '#000', position: 'absolute',
//          top: 0, transform: 'translate(600px,200px)',
//        }}
//      />
//      <div
//        style={{ width: 5, height: 5, background: '#000', position: 'absolute',
//          top: 0, transform: 'translate(800px,0px)',
//        }}
//      />
//    </div>);
//    }
//}
//ReactDom.render(<Demo />, document.getElementById('root'));
