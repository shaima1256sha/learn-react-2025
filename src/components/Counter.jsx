import { useState } from "react";


const Counter = () => {
  
  let [count, setCount]=useState(0)

  const increment = () => { 
    setCount((prev) => { 
      console.log(prev);
      return count+1
     })
   };
  return (
    <>
      <h2>Counter</h2>
      <h4>{count}</h4>
      <button onClick={increment}>Incremnt</button>
    </>
  );
};

export default Counter