import Tween from 'rc-tween-one';
import React from 'react';
import ReactDom from 'react-dom';

const p1 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const t = Tween.easing.path(p);
const t1 = Tween.easing.path(p1);
const anim = [
  {
    repeatDelay: 1000,
    duration: 1000,
    scaleX: 0,
    scaleY: 2,
    repeat: -1,
    yoyo: true,
    ease: t,
  },
  {
    repeatDelay: 1000,
    duration: 1000,
    y: -30,
    appearTo: 0,
    repeat: -1,
    yoyo: true,
    ease: t1,
  },
];
class Demo extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (<div style={{ height: 300 }}>
      <Tween
        animation={anim}
        style={{
          position: 'absolute',
          opacity: 1,
          height: 50,
          width: 50,
          transform: 'translate(150px,150px)',
          background: '#000',
          transformOrigin: 'center bottom',
        }}
      />
      <div style={{ width: 100, height: 100, background: '#fff000', position: 'absolute' }} />
      <svg style={{ position: 'absolute' }}>
        <path fill="none" stroke="#000" d={p} />
        <path d={p1} fill="none" stroke="#000" />
      </svg>
    </div>);
  }
}
ReactDom.render(<Demo />, document.getElementById('__react-content'));
