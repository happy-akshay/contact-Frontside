import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../Redux/UserRedux";

const store=configureStore({
    reducer:{
        userStore:UserReducer
    }
})

export default store