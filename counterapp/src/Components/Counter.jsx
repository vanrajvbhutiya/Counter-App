import React from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0)
    const addTheValue = ()=> {
        setCount(()=>{
            setCount = +1;
        })
    }
    const subTheValue = ()=> {
        setCount(()=>{
            setCount = -1;
        })
    }
  return (
    <div>
            <h2>Counter App Using ReactJs{count}</h2>
            <button onClick={addTheValue}>+</button>
            <button onClick={subTheValue}>+</button>
   
    </div>
  )
}



export default Counter