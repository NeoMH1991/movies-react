import React, { useEffect, useState } from 'react'; //react hooks - starts with 'use'
import useDocumentTitle from './useDocumentTitle'; //function

const Counter = (props) => {
    //states and functions here
    //Cannot call hooks inside loops, conditions or nested function
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //HOOKS
  useDocumentTitle(`${name} has clicked ${count} times`);


    return ( 
        <React.Fragment>

            <input type="text" onChange={ e=>setName(e.target.value)}/>
            <div> {name} has clicked {count} times </div>
            <button onClick={() => setCount(count+1)}>Increase</button>

        </React.Fragment>
     );
}
 
export default Counter;