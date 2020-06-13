import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
  let value = useContext(ValueContext)  
  return (
    <div>
      Child number {value[0]}
      <br/>
      <button onClick={()=> {value[1](++value[0]) }}>Update Value</button>
    </div>
  );
}

export default Child;
