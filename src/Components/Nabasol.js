import { useState } from "react";


function Nabasol(){

    const [isArray,setIsArray]= useState(["Initial Value 1","Initial Value 2","Initial Value 3"]);
return(
    <>

    <form action="">

        <p> {isArray}</p>

    <label htmlFor="name">Name</label><input type="text" id="idText" /> 
    <br />
    <label htmlFor="phone">Number</label><input type="number" name="number" id="idPhone" />
    <br />
    <label htmlFor="Email">Email</label><input type="email" name="email" id="idEmail" />
    
    <button type="submit">Submit</button>
    </form>
    
    

    </>
);


}

export default Nabasol;