import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router/routes'
export default function App() {
  let element = useRoutes(routes)
  return <div className='root-box'>
    <div>App</div>
    <div>
      {/* <Link className='link-box' to={'/A'}>组件A</Link>
      <Link className='link-box' to={'/B/:100/:200'}>组件B</Link>
      <Link className='link-box' to={'/C'}>组件C</Link> */}
    </div>
    <div>
      {element}
    </div>
  </div>
}
