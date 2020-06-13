import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';


function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 52);

  return (
    <div>
      Child2 {state}
      <br/>
      <button onClick={() => {dispatch({type:"INCREMENT"});  }}>Icrement</button>
      <button onClick={() => {dispatch({type:"DECREMENT"});  }}>Decrement</button>
      
    </div>
  );
}

export default Child2;
