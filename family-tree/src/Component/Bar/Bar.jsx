import { Button, Stack } from '@mui/material'
import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export const Bar = () => {
  return (
  <Stack spacing={2} sx={{ boxShadow: 1, height:'50px',justifyContent: "center",
    alignItems: "center", }} direction="row">

      <Button variant="contained" startIcon={<PersonAddIcon />} >Create Tree</Button>
   
    </Stack>
  )
}
