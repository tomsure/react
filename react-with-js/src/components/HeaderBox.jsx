import React from 'react'
import { widthRouter } from '../router'
import { Link } from 'react-router-dom'

let HeaderBox = function HeaderBox(props) {
    console.log(1111, props) //可以拿到路由信息
    return (
        <div>
            <div>HeaderBox</div>
            <div>
                <Link className='link-box' to={'/A'}>组件A</Link>
                <Link className='link-box' to={'/B'}>组件B</Link>
                <Link className='link-box' to={'/C'}>组件C</Link>
            </div>
        </div>
    )
}
export default widthRouter(HeaderBox)
