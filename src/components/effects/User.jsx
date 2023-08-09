import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

import Typography from "@mui/material/Typography";

const User = (props) => {
    console.log(props);

 
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
     
      title={props.userName}
      subheader={props.userbornDate}
      
    />
    <CardMedia
      component="img"
      height="194"
      src={props.userImage}
      alt={props.userName}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {props.aboutUser}
      </Typography>
    </CardContent>
  </Card>
   

    
  );
}

export default User