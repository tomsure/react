import React, { useState,useRef } from 'react'


interface Comp1Props {
  aa: string,
  bb:number
}
let Comp1: React.FC<Comp1Props> = (props) => {
  return (
    <div>
      <div>子组件Comp1</div>
      <div>
      </div>
     </div>
  )
}

export default Comp1
