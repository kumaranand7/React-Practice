import { useEffect } from "react";
import  axios  from 'axios';

function FetchApi2(){

    // Function Declaration

    async function  fetchApiMethod () {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        console.log(response.data.data);
    }


    // Function Expression

    // const  fetchApiMethod = async ()=> {
    //     const response = await axios.get("https://reqres.in/api/users?page=2");
    //     console.log(response.data.data);
    // }

// Function Declaration: Hoisted and can be called before its definition. Often used for defining functions that are used in multiple places or that you want to define at the top of your file.
// Function Expression: Not hoisted, so it needs to be defined before it is called. It can be useful for inline or anonymous functions and is especially common in modern JavaScript due to its concise syntax and lexical this.
    
    
    useEffect(()=>{

        fetchApiMethod();
    },[]);
 


return(
<><p>Fetch API 2</p>
</>


);


}

export default FetchApi2;