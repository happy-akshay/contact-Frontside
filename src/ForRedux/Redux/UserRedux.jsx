import {createReducer} from '@reduxjs/toolkit'
const initialState={
    loading:false,
    user:{},
    error:null,
    isAuthenticated:false
}

export const UserReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase("CreateFile",(state,action)=>{
        state.user=action.payload
    })
    .addCase("ReadFile",(state,action)=>{
        state.readuser=action.payload
    })
    .addCase("UpdatedFile",(state,action)=>{
        state.readuser=action.payload
    })
})