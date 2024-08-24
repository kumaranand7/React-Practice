import React, { useState } from 'react';

function SimpleForm() {
  // State to hold the current input values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  // State to hold the list of submitted values
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new data to the list of submitted data
    setSubmittedData([...submittedData, { name, phone }]);
    
    // Clear the input fields after submission
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      <ul>
  {submittedData.map((item, index) => ( 
    <li key={index}>
      Name: {item.name}, Phone Number: {item.phone}
    </li>
  ))}
</ul>


    </div>
  );
}

export default SimpleForm;
