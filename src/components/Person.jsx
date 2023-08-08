import React, { useState } from 'react'

const Person = () => {

    const [name,setName]=useState("harry");
    const [age,setAge]=useState(23);
    const [location,setLocation]=useState("Kathmandu");

    const nameChanged=()=>{
        
        // auto-batching-->yesle chi event ma vako sabai changes lai combine garera batch banaucha ra ekaichoti render gardinxa

        setName("Ujjwal");
        setAge(24);
        setLocation("Jhapa");
    }

  return (
    <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{location}</h3>
        <button onClick={nameChanged} >Change to Ujjwal</button>


    </div>
  )
}

export default Person