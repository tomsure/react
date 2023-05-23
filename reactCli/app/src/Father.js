import { useState, createContext } from "react"
import Child from "./Child"
import './Father.css'
import GlobalContext from "./globalContext"
function Father() {
    const [count, addCount] = useState(0)
    function add() {
        addCount(count + 1)
    }
    return (
        <div className="father">
            <div>这是父组件 </div>
            <div>数字   {count}</div>
            <div>
                <button onClick={() => add()}>点击+1</button>
            </div>
            <GlobalContext.Provider value={count}>
                <Child></Child>
            </GlobalContext.Provider>
        </div >
    )
}
export default Father
