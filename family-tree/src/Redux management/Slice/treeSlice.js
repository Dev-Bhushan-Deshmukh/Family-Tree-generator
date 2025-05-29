import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    value:{
  "firstName": "",
  "middleName": "",
  "lastName": "",
  "phone": "",
  "age":'',
  "gender": "",
  "birth":'',
  "profession": "",
  "professionDescription": "",
  "email": "",
  "address": "",
  "bio": "",
  "child": [],
  "spouse": []
}
}
export const newParentSlice = createSlice({
  name: 'parent',
  initialState,
  reducers: {
    newParent: (state,Action) => {

      state.value = JSON.parse(Action.payload) 
    },
  newChild: (state,Action) => {

      state.value.child.push(JSON.parse(Action.payload) )
    },
  },
})

// Action creators are generated for each case reducer function
export const { newParent,newChild } = newParentSlice.actions

export default newParentSlice.reducer