import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Card = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item sx={
          {border:"1px solid red"}
        }>                     
          <Typography variant='h3'>Samsung TV </Typography>
          <img src='https://th.bing.com/th/id/OIP.vAcGtjJVHB3elRinRSMLOAHaFj?pid=ImgDet&rs=1' 
          style={{height:"100px",width:"100px"}}
          />
          <Typography>Samsung TVs are known for their excellent picture quality 
            and useful smart TV features1. They offer a wide range of options to choose from,
             with sizes ranging from 24-inch 720p sets to 88-inch QLED sets1.
              Samsung TVs are versatile and can provide good to very good picture quality,
               with their LED models generally having VA panels</Typography>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>xs=4</Item>
      </Grid>
     
    </Grid>
  </Box>
  );
}

export default Card