import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

import Typography from "@mui/material/Typography";

const User = (props) => {
  const {userbornDate,userImage,userName,aboutUser}=props;

 
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
     
      title={userName}
      subheader={userbornDate}
      
    />
    <CardMedia
      component="img"
      height="194"
      src={userImage}
      alt={userName}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {aboutUser}
      </Typography>
    </CardContent>
  </Card>
    
  );
}

export default User