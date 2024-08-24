import { useState } from "react";

function Demo1() {
  const [isArray, setIsArray] = useState(["Anand", "Kumar", "Gupta"]);

  return (
    <>
      {/* Rendering whole  */}
      <li> {isArray}</li>
      {/* Rendering by map function */}

      {isArray.map((element) => (
        <li> {element}</li>
      ))}
      <br />

      {/* <button onClick={()=>setIsArray(["new element 1","new element 2","new element 3"])}>Click </button> */}

      <button onClick={() => setIsArray([...isArray, "another element  "])}>Click</button>
    </>
  ); 
} 

export default Demo1;
