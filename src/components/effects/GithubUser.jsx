import { Avatar, Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url="https://api.github.com/uers";

const GithubUser = () => {

    const [userList,setUserList]=useState([]);
    const [error,setError]=useState(false);

    useEffect(()=>{     //first ma yo code chalne vaera yesma hamle data taneko    // use effect bata jsx hmtl return garna paidaina 
        const fetchUser=async()=>{
           try {
            const response= await axios.get(url);
            const users=response.data; 
            setUserList(users);  
            
           } catch (error) {
            setError(true);
            console.log(error.message);
            
           }
           // console.log(users);
             


        }
        fetchUser();
    },[])

    

  return (
    <div style={{display:"flex",gap:"2rem"}}>

        {error && <Typography>Error during api fetch</Typography>}           {/*implementation of conditional rendering */}

        {userList.map((item)=>{
            const {id,login, avatar_url , html_url}=item;
            return <Box key={id} sx={{border:"1px solid green",margin:"1rem"}}>
               <Avatar alt={login} src={avatar_url} />
               <Typography>{login}</Typography>
               <Link href={html_url}>Link</Link>

            </Box>
        })}


    </div>
  )
}

export default GithubUser