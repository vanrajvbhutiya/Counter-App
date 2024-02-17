import React from 'react'

const Counter = () => {
    
    let [count, setCount] = useState(0)
    //add value
    const addTheValue = ()=> {
        setCount(count++);
    }
    //remove value 
    const subTheValue = ()=> {
        setCount(count--)
    }
  return (
    <div>
            <h2>Counter App Using ReactJs{count}</h2>
            <button onClick={addTheValue}>add value</button>
            <button onClick={subTheValue}>remove value</button>
   
    </div>
  )
}



export default Counter
