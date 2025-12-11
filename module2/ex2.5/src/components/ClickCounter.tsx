import { useState } from "react"
interface ClickCounterProps {
    title : string
    on10ClickMessage ?: string
    onButtonMessage ?: string
}



const ClickCounter =({title, on10ClickMessage, onButtonMessage} : ClickCounterProps)=>{
    
    const [count, setCount] = useState(0)
    const[onButton, setOnButton] = useState(false)


    return (
        <div className="card">
            <h1>{title}</h1>
            <button onMouseEnter={()=> setOnButton(true)} onMouseLeave={()=> setOnButton(false)} onClick={() => setCount((count) => count + 1)}>
                count is {count}
                {onButton ? <p>{onButtonMessage}</p> : null}
                
            </button>
            {count >= 10 ? <p>{on10ClickMessage}</p> : null}
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
      </div>
    )
}
export default ClickCounter