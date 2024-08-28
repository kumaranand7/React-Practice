// import Demo1 from './Components/Demo1';
// import Demo2 from './Components/Demo2';
// import Nabaso2 from './Components/Nabaso2';
// import Nabasol from './Components/Nabasol';
// import Inkoop from "./Components/Inkoop";

// import Nabasol3 from "./Components/Nabasol3";

import FetchApi2 from "./Components/FetchApi2";

import FetchApi from "./Components/FetchApi";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Demo1> </Demo1> */}
      {/* <Nabasol> </Nabasol> */}
      {/* <Demo2></Demo2> */}
      {/* <Nabaso2> </Nabaso2> */}
      {/* <Nabasol3> </Nabasol3> */}
      {/* <Inkoop> </Inkoop> */}
      <Router>
        <Routes>
          <Route path="/" element={<FetchApi /> }> </Route>

           <Route path="/fetch2/:id" element={<FetchApi2 />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
