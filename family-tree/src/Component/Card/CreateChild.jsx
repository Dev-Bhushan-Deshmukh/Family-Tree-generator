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
import { useDispatch, useSelector } from 'react-redux';
import { newChild } from '../../Redux management/Slice/treeSlice';
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
    .required('gender is required'),
      birth: yup
    .string('Enter your birth')
    .required('birth is required'),
       profession: yup
    .string('Enter your profession')
    .required('profession is required'),
     professionDescription: yup
    .string('Enter your professionDescription')
    .required('professionDescription is required'),
     phone: yup
    .string('Enter your phone')
    .required('phone is required'),
     email: yup
    .string('Enter your email')
    .required('email is required'),
     address: yup
    .string('Enter your address')
    .required('address is required'),
     bio: yup
    .string('Enter your bio')
    .required('bio is required')
});

export const CreateChild = ({setCreateChild}) => {

    const dispatch = useDispatch()

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
   values.child=[];
    values.spouse=[];
      console.log(JSON.stringify(values, null, 2));
      dispatch(newChild(JSON.stringify(values)))
      setCreateChild(false);
    },
  });
  return (
    <Card sx={{maxWidth:'800px', flexShrink:0, boxShadow:1,padding:'10px',margin:'10px'}}>
          <Typography variant="h5" gutterBottom >
        Create Child
      </Typography>

           <form onSubmit={formik.handleSubmit}>
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

<TextField fullWidth id="outlined-basic" label="Age" name='age' variant="outlined" type='number'

   value={formik.values.age}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}

/>
 <TextField
 fullWidth
 select
 id="gender"
label=" Gender"
variant="outlined"

 name='gender'
    value={formik.values.gender}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}


        >
         {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Stack>
<Stack marginTop={2} marginBottom={3} gap={2} direction={'row'} >

<TextField fullWidth id="outlined-basic" label="Birth" variant="outlined" type='number'
  name='birth'
    value={formik.values.birth}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.birth && Boolean(formik.errors.birth)}
          helperText={formik.touched.birth && formik.errors.birth}

/>

 
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

    value={formik.values.profession}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.profession && Boolean(formik.errors.profession)}
          helperText={formik.touched.profession && formik.errors.profession}


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
    value={formik.values.professionDescription}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.professionDescription && Boolean(formik.errors.professionDescription)}
          helperText={formik.touched.professionDescription && formik.errors.professionDescription}
  />
</Stack>
<Divider/>

<Stack marginTop={2} marginBottom={3} gap={2} direction={'row'} >

 <TextField
 fullWidth
 
          id="Profession"
          
          label=" Phone"
        name='phone'
        //   helperText="Please select your gender"
          variant="outlined"

            value={formik.values.phone}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}

        >
       
        </TextField>

        <TextField fullWidth
 id="outlined-basic" 
 label="Email"
  variant="outlined"
  name='email'
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
  />
</Stack>

<Stack marginTop={2} marginBottom={3}>
      <TextField fullWidth
 id="outlined-basic" 
 label="Address"
  variant="outlined"
  name='address'
    value={formik.values.address}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
  />
</Stack>
<Divider />
<Stack marginTop={2} marginBottom={3}>
      <TextField fullWidth
 id="outlined-basic" 
 label="Bio"
  variant="outlined"
  name='bio'
    value={formik.values.bio}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          error={formik.touched.bio && Boolean(formik.errors.bio)}
          helperText={formik.touched.bio && formik.errors.bio}
  />
</Stack>
<Stack spacing={2} sx={{ justifyContent: "end",
    alignItems: "center", }} direction="row">

      <Button sx={{width:'120px'}} variant="contained"  >Reset</Button>
   
      <Button sx={{width:'120px'}} type='submit' variant="contained" >Save</Button>
    </Stack>
    </form>
    </Card>
    
  )
}
