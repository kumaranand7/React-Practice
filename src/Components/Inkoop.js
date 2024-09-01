import { useState } from "react";

function Inkoop() {
  const [number, setNumber] = useState("");
  const isEven = Number(number) % 2 === 0;
  const num = Number(number);

  return (
    <>
      <p>This is Inkoop assignment</p>

      <input
        type="number"
        name=""
        id=""
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      {number !== "" && (isEven ? "is Even" : "Odd")}

      {number !== "" && (
        <p>
          {num + 2}, {num + 4}, {num + 6}
        </p>
      )}
    </>
  );
}

export default Inkoop;
