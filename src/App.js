import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
//useState is for a single value while useReducer is for a whole state management
function App() {

  // let [number, setNumber] = useState(45)
  let value = useState(48);
  
  return (
    <ValueContext.Provider value={value}>
      <div>
        Hello World
        <Parent></Parent>
        {/* <button onClick={() => { setNumber(++number) }}>Update Number</button> */}
      </div>
    </ValueContext.Provider>
  );
}

export default App;
