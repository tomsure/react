import React from 'react'
import { Link } from 'react-router-dom'
export default function A() {

    let toCompB1 = () => { // navigate('/B/:200/:200'
    }
    return (
        <div className='root-box'>
            <div>A</div>
            <div>
                <button onClick={toCompB1}>跳转到B带参数</button>
            </div>
            <div>
                <Link className='link-box' to={'/A/A1'}>组件A1</Link>
                <Link className='link-box' to={'/A/A2'}>组件A2</Link>
                <Link className='link-box' to={'/A/A3'}>组件A3</Link>
            </div>
            {/* <div>
                <Outlet />
            </div> */}
        </div>
    )
}
