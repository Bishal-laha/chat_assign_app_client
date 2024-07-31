import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        userData:null,
        isLogin:false,
        isLoader:true
    },
    reducers:{
        userLogin:(state,action)=>{
            state.userData = action.payload;
            state.isLogin = true;
            state.isLoader = false;
        },
        userLogout:(state)=>{
            state.userData = null;
            state.isLogin = false;
            state.isLoader = false;
        },
        changeUserData:(state,action)=>{
            state.userData = action.payload;
        }
    },
});

export const {userLogin,userLogout,changeUserData} = authSlice.actions;
export default authSlice.reducer;