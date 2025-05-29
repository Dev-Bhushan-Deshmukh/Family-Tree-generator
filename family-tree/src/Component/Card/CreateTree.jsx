import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, MenuItem, Stack, TextField } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .required('first name is required'),
       middleName: yup
    .string('Enter your middle name')
    .required('middle name is required'),
     lastName: yup
    .string('Enter your last name')
    .required('last name is required'),
     age: yup
    .string('Enter your age')
    .required('age is required'),
     gender: yup
    .string('Enter your gender')
    .required('gender is required')
});

export const CreateTree = () => {
    const gender = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },

];
const profession=[
  {
    value: 'government',
    label: 'Government',
  },
  {
    value: 'private',
    label: 'Private',
  },
    {
    value: 'buisness',
    label: 'Buisness',
  },
  {
    value: 'selfEmployed',
    label: 'Self employed',
  },
];
const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName:'',
      lastName:'',
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Card sx={{maxWidth:'800px', boxShadow:1,padding:'10px',margin:'10px'}}>
          <Typography variant="h5" gutterBottom >
        Create Parent
      </Typography>
<Stack marginTop={2} marginBottom={3} gap={2} direction={'row'} >

<TextField fullWidth
 id="outlined-basic" 
 label="First name"
  variant="outlined"
  name='firstName'
    value={formik.values.firstName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
  />
<TextField fullWidth id="outlined-basic"
 label="middleName" 
 variant="outlined"
  name='middleName'
    value={formik.values.middleName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.middleName && Boolean(formik.errors.middleName)}
          helperText={formik.touched.middleName && formik.errors.middleName}
  />
<TextField fullWidth id="outlined-basic"
 label="lastName"
  variant="outlined"
  name='lastName'
    value={formik.values.lastName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
  />
</Stack>

<Stack marginTop={2} marginBottom={3} gap={2} direction={'row'} >

<TextField fullWidth id="outlined-basic" label="Age" variant="outlined" type='number' />
 <TextField
 fullWidth
 select
          id="gender"
          
          label=" Gender"
        
        //   helperText="Please select your gender"
          variant="outlined"
        >
         {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Stack>
<Divider/>
<Stack marginTop={2} marginBottom={3} gap={2} direction={'row'} >

 <TextField
 fullWidth
 select
          id="Profession"
          
          label=" Profession"
        name='profession'
        //   helperText="Please select your gender"
          variant="outlined"
        >
         {profession.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField fullWidth
 id="outlined-basic" 
 label="Description"
  variant="outlined"
  name='professionDescription'
    value={formik.values.firstName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
  />
</Stack>
<Divider/>

<Stack marginTop={2} marginBottom={3} gap={2} direction={'row'} >

 <TextField
 fullWidth
 
          id="Profession"
          
          label=" Phone"
        name='profession'
        //   helperText="Please select your gender"
          variant="outlined"
        >
       
        </TextField>

        <TextField fullWidth
 id="outlined-basic" 
 label="Email"
  variant="outlined"
  name='professionDescription'
    value={formik.values.firstName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
  />
</Stack>

<Stack marginTop={2} marginBottom={3}>
      <TextField fullWidth
 id="outlined-basic" 
 label="Address"
  variant="outlined"
  name='professionDescription'
    value={formik.values.firstName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
  />
</Stack>
<Divider />
<Stack marginTop={2} marginBottom={3}>
      <TextField fullWidth
 id="outlined-basic" 
 label="Bio"
  variant="outlined"
  name='professionDescription'
    value={formik.values.firstName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
  />
</Stack>
<Stack spacing={2} sx={{ justifyContent: "end",
    alignItems: "center", }} direction="row">

      <Button sx={{width:'120px'}} variant="contained"  >Reset</Button>
   
      <Button sx={{width:'120px'}} variant="contained" >Save</Button>
    </Stack>
    </Card>
    
  )
}
