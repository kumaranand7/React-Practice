import { useState } from "react";

function Nabaso2() {
  const [namee, setName] = useState("");
  const [phonee, setPhone] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, { namee, phonee }]);
    setName('');
    setPhone('');
  };

  const onFormReset = () => {
    setName('');  // Clear the name input
    setPhone(''); // Clear the phone input
    setSubmittedData([]); // Clear the submitted data (optional)
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        Name 
        <input
          type="text"
          name="name"
          id="id_name"
          value={namee}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        Phone 
        <input
          type="number"
          name="phone"
          id="id_phone"
          value={phonee}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={onFormReset}>Reset</button> {/* Reset button */}
      </form>

      <ul>
        {submittedData.map((element, index) => (
          <li key={index}>
            Name: {element.namee}, Phone: {element.phonee}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Nabaso2;
