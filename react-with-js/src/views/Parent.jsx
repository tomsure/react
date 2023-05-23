import React, { useEffect, useRef } from 'react';
import style from '../css/comp1.module.css'
import Child1 from './Child1';

let Parent = () => {
  let x = useRef(null);
  useEffect(() => {
    console.log(x.current)  //获取ref
  }, [])
  return (
    <div className={`box ${style.aaa}`}>
      <h1 >Parent App</h1>
      <div>
        <Child1 ref={x}></Child1>
      </div>
    </div >
  );
}
export default Parent
