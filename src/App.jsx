import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ArrayState from "./components/ArrayState";
import Products from "./components/Products";
import Person from "./components/Person";
import Card from "./components/Card";
import User from "./components/effects/User";
import { userData } from "../userData";


function App(){
  return(
    // <Counter/>
    // <ArrayState/>
    // <Products/>
    // <Person/>
    // <Card/>
    <div  style={{display:"flex",gap:"2rem"}}>

      {userData.map((item)=>{
        const {id,name,bornDate,about,image}=item;
        return(
          <User key={id} 
          userName={name} 
          aboutUser={about} 
          userbornDate={bornDate} 
          userImage={image}
          />
        )
        
      })}

    </div>
    
  )
 
}
export default App;