import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ArrayState from "./components/ArrayState";
import Products from "./components/Products";
import Person from "./components/Person";
import Card from "./components/Card";
import User from "./components/effects/User";
import { userData } from "../userData";
import { Button, Typography } from "@mui/material";


function App(){
  const isAdmin = true;
  const value=true // conditional rendering
  const isLoggedIn=true;

  console.log("I am here");
  const [count,setCount]=useState(0);

  useEffect(()=>{
    console.log("Ujwal is here");
  });

  return(
    // <Counter/>
    // <ArrayState/>
    // <Products/>
    // <Person/>
    // <Card/>
    <div  style={{display:"flex",gap:"2rem"}}
    >
      <Button onClick={()=>setCount(count+1)}>
        Increment
      </Button>
      <Typography>Value:{count}</Typography>


      {value && <Typography>Hello mom</Typography>}  {/* conditional rendering */}
      
      {
        isAdmin &&  <Button variant="contained" color="success">     {/* conditional rendering */}
        remove user
      </Button>
      }
      {
        isLoggedIn? <Typography>You are loged in</Typography> :
        <Typography>You are not loged in</Typography>
      }
      
    </div>
    
  )
 
}
export default App;