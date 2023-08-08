import React, { useState } from 'react'
import { personData } from '../../personData';

const ArrayState = () => {

    const [persons, setPersons]=useState(personData);

    const removePerson=(id)=>{
      const newPersons=persons.filter((item)=>item.id!==id);
      console.log(newPersons);
      setPersons(newPersons);
    }
    const removeAll=()=>{
      setPersons([]);
    }
   const reset=()=>{
    setPersons(personData)
    console.log("persons",persons)
  
   }

  return (
    <div>
      {persons.map((item)=>{
        return (
          <div key={item.id} style={{display:'flex'}}>
            <h3>{item.name}</h3>
            <button onClick={()=>removePerson(item.id)}>remove</button>
            </div>

        );
      }
      )}
      <button  onClick={removeAll} style={{border:"1px solid red"}}>Remove all</button>

      <button onClick={reset}>Reset</button>



    </div>
  );
}

export default ArrayState