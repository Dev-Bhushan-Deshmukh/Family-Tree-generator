import { Button, Stack } from '@mui/material'
import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export const Bar = ({setCreateParent}) => {
  return (
  <Stack  spacing={2} sx={{flexShrink:0, width:'100%', boxShadow: 1, height:'50px',justifyContent: "end",
    alignItems: "center", }} direction="row">

      <Button  variant="contained" startIcon={<PersonAddIcon />} onClick={()=>setCreateParent(prev=>!prev)} >Create Tree</Button>
   
    </Stack>
  )
}
