import './child.css'
import { useContext } from 'react'
import GlobalContext from "./globalContext"

function Child() {
    const uContxt = useContext(GlobalContext)
    return (
        <div className='child'>
            <div>这是子组件</div>
            <div>
                {uContxt}
            </div>
        </div >
    )
}
export default Child
