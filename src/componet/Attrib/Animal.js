import React, { useState } from 'react'

function Animal() {

    const [count, setCount]= useState(0);

    const handleClick= () => {
      setCount(count +1);
    }
  
  return (
    <div>
         <button onClick={handleClick} >Add Animal</button>
        <div>Number of animal: {count}</div>
     </div>
  );
}

export default Animal;