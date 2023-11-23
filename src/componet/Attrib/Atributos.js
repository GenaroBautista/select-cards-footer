import React from "react";
import { useState } from "react";

// function useState(defaultValue) {
//     return{
//         yourState: defaultValue,
//         yourSetter:() => {}
//     };
// }

function MyArrar() {
  const { conunt, setCount } = useState(0);
  const { value, setValue } = useState(0);

  const handleClick = () => {
    setCount(conunt + 1);
  };

  //  const MyArrar=makeArray();
  // const fisrtElement= MyArrar(0);
  // const secondElement = MyArrar(1);
  return (
    <dic>
      <button onClick={handleClick}>Add Animal</button>
      <div> NUmber of Animal</div>
    </dic>
  );
}
// const {fisrtElement, secondElement} = makeArray();
// console.log(fisrtElement,secondElement);

export default MyArrar;
