import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function FetchApi2() {
    const [names, setNames] = useState([]); // Initialize as an empty array
    const [avatarUrl,setAvtarUrl] =useState([]);
    const[isLoadinf,setIsloading] = useState(true);
    console.log(names);
    

    //useParams 

    const {id} =useParams();
    console.log(id);

    // Function Declaration
    async function fetchApiMethod() {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2");
            const arrayElement = response.data.data;
            // Update state with the full array of names
            
            setNames(arrayElement.map((element) => element.first_name));
            setAvtarUrl(arrayElement.map((element)=>element.avatar));
            setIsloading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchApiMethod();
    }, []);

    return (
        <>
            {isLoadinf ? (
                <p>Loading data...</p>
            ) : (
                <>
                    <p>Fetch API 2</p>
                    <p>
                        {names.map((name, index) => (
                            <span key={index}>Name: {name} </span>
                        ))}
                    </p>
                    <p>
                        {avatarUrl.map((avatar, index) => (
                            <img key={index} src={avatar} alt={`Avatar ${index}`} />
                        ))}
                    </p>
                </>
            )}
        </>
    );
    
}

export default FetchApi2;
