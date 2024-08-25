import { useState } from "react";

function Nabasol3() {
  const [isName, setName] = useState("");
  const [isFormSubmit, setFormSubmit] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    setFormSubmit([...isFormSubmit, { isName }]);
    setName('');
  };

  return (
    <>
      <p>This is nabasol 3 form </p>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="name"
          id="id_name"
          value={isName}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> Submit</button>
      </form>{" "}
      {isFormSubmit.map((element) => (
        <li>{element.isName}</li>
      ))}


      
    </>
  );
}

export default Nabasol3;
