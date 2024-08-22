import { useState } from "react";

function Demo2(){

    const [isArray,setIsArray]= useState(["Anand","Kumar"]);
return(

<>

<p>{isArray}</p>
<li>{isArray}</li>
{isArray.map((element)=><li>{element} </li>)}

<button onClick={()=>setIsArray([...isArray,"new element"])}></button>
</>
);


}

export default Demo2;