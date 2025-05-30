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
import FavoriteIcon from '@mui/icons-material/Favorite';
//

import { familyMembers } from '../../Data/members';

//
export const NodeCard = ({id, nodeData,setCreateChild }) => {

  const parent=familyMembers.find((item)=>item.id==id);



const spouse=parent.spouses.map((item_)=>familyMembers.find((item)=>item.id==item_))

  // const spouse=familyMembers.find((item)=>item.id==parent.spouses[0]);

   const[childShow,setChildShow]=useState(false);
  return (
<div style={{width:'98%',marginTop:'10px',height:'fitContent'}}>


   <div style={{width:'100%',marginTop:"10px", height:'fitContent',display:'flex',alignItems:'center'}}>
<Card
  onClick={() => setChildShow(!childShow)}
  sx={{ background:parent.parents.length>0 && 'red', flexShrink: 0, borderRadius: 3, boxShadow: 3, p: 2 }}
>
  <Stack direction="row" alignItems="center" spacing={2}>
    <Avatar sx={{ width: 56, height: 56 }}>
      {parent.fullName?.split(" ")[0]?.charAt(0)}
    </Avatar>

    <Box>
      <Typography variant="h6" fontWeight="bold">
        {parent.fullName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {parent.bio || 'No bio provided'}
      </Typography>
    </Box>
  </Stack>



</Card>
{

  spouse.length>0 &&  <FavoriteIcon/>
}



{spouse.map((spouseItem,index)=>
<>
<p>{index}</p>

<Card
  // onClick={() => setChildShow(!childShow)}
  sx={{background:'orange', flexShrink: 0, borderRadius: 3, boxShadow: 3, p: 2 }}
>
  <Stack direction="row" alignItems="center" spacing={2}>
    <Avatar sx={{ width: 56, height: 56 }}>
      {spouseItem.fullName?.split(" ")[0]?.charAt(0)}
    </Avatar>

    <Box>
      <Typography variant="h6" fontWeight="bold">
        {spouseItem.fullName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {spouseItem.bio || 'No bio provided'}
      </Typography>
    </Box>
  </Stack>

</Card>
</>




)}

   </div>
   









{
childShow && 
 <div style={{width:'100%',marginTop:"10px", height:'fitContent',display:'flex'}}>
    Children of {parent.fullName}
   {
 
parent.children.length>0 && parent.children.map((childItem)=>
  // <p>{childItem}</p>
 <NodeCard id={childItem} nodeData={childItem} setCreateChild={setCreateChild}  /> 

)

}
</div>
}
 
    
    

</div>
   
  );
};

