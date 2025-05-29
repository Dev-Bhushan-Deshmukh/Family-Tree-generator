import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Divider,
  Box,
  Button,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MaleIcon from '@mui/icons-material/Male';

export const NodeCard = ({ nodeData,setCreateChild }) => {
   const user=nodeData
   console.log(user)
   const[childShow,setChildShow]=useState(false);
  return (
<div style={{width:'98%',marginTop:'10px',height:'fitContent'}}>
 <Card onClick={()=>setChildShow(!childShow)} sx={{ maxWidth: 400,flexShrink:0, borderRadius: 3, boxShadow: 3, p: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar sx={{ width: 56, height: 56 }}>
          {user.firstName}
        </Avatar>

     
        <Box>
          <Typography variant="h6" fontWeight="bold">
            {user.firstName} {user.middleName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.bio || 'No bio provided'}
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <CardContent sx={{ p: 0 }}>
        <Stack spacing={1}>
          <Typography variant="body2" display="flex" alignItems="center">
            <MailOutlineIcon fontSize="small" sx={{ mr: 1 }} /> {user.email}
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <PhoneAndroidIcon fontSize="small" sx={{ mr: 1 }} /> {user.phone}
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <MaleIcon fontSize="small" sx={{ mr: 1 }} /> Gender: {user.gender}, Age: {user.age}
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <WorkOutlineIcon fontSize="small" sx={{ mr: 1 }} /> {user.profession} – {user.professionDescription}
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <LocationOnIcon fontSize="small" sx={{ mr: 1 }} /> {user.address}
          </Typography>
        </Stack>
      </CardContent>
            <Button sx={{width:'120px'}} variant="contained" onClick={()=>setCreateChild(true)}  >new Child</Button>
    </Card>

    {childShow &&
     <div style={{width:'100%',marginTop:"10px", height:'fitContent',display:'flex'}}> {
   
user.child.length>0 && user.child.map((childItem)=>

<NodeCard nodeData={childItem} setCreateChild={setCreateChild}  />

)

}
</div>
    }

</div>
   
  );
};