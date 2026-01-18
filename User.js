
import { useState } from "react";
const User = (props) => {
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(1);
    return(
       <div className="user-card">
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
             <button onClick={()=>setCount(count-1)}>Decrease Count</button>
            <h1> Count: {count}</h1>
            <h1> Count1: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Noida</h3>
            <h4>Contact: nikhil_singh_1503</h4>
        </div>
    )
}

export default User;