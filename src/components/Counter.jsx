import React, { useState } from 'react'


const Counter = () => {
  // hooks-->agadi use lageko cha vane hooks vanera chinnu
  // use => useState, useEffect, useRef, useMemo,useCallback,

  //component lai render garna lai special hooks cha jaslai useState vancha
  let [count,setCount]=useState(0);
  //console.log(state);
  const increaseCount=()=>{
    // count=count+1; // component lai render garna lai yo value lai change garne
    const newValue=count+1;
    setCount(newValue); // yo value change vaexi afai render huncha return vako code

   // console.log("count",newValue);
  };
  const decreaseCount=()=>{
    const newValue=count-1;
    setCount(newValue);
  }

  return (<div>
    <h3>Value:{count}</h3>
    <button onClick={increaseCount} >Increment</button>
    <button onClick={decreaseCount}>Decrement</button>
    
  </div>
  );
}

export default Counter