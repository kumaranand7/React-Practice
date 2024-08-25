import { useEffect, useState } from "react";
import axios from 'axios';

const FetchApi = () => {
  // Define state variables
  const [details, setDetails] = useState(null); // Initialize with null or empty state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
    //   try {
        const url = "https://randomuser.me/api/?page=1&results=1&werwe=abc";
        const response = await axios.get(url);
        const userData = response.data.results[0];
        setDetails(userData); // Set the user data to state
        setLoading(false); // Set loading to false
    //   } catch (error) {
    //     setError(error); // Set error state
    //     setLoading(false); // Set loading to false
    //   }
    };

    fetchUserData(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when the component mounts

  // Render based on state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>User Information</h1>
     
        <div>
          <img src={details.picture.large} alt="User" />
          <p><strong>Name:</strong> {details.name.first} {details.name.last}</p>
          <p><strong>Gender:</strong> {details.gender}</p>
          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>Phone:</strong> {details.phone}</p>
          <p><strong>Location:</strong> {details.location.city}, {details.location.state}</p>
        </div>
   
    </>
  );
};

export default FetchApi;
