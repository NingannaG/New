import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    singleUser:null
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerStart :(state)=>{
      state.isFetching=true;
    },
    resgisterSuccess:(state,action)=>{
      state.isFetching=false;
    },
    registerError:(state)=>{
      state.error=true;
    },
    getUserStart:(state)=>{
      state.isFetching=true
    },
    getUserSuccess:(state,action)=>{
      state.isFetching=false;
      state.singleUser=action.payload
    },
    getUserError:(state)=>{
      state.error=true
    }
    
  },
});

export const { loginStart, loginSuccess, loginFailure ,logout,registerError,registerStart,resgisterSuccess,
getUserStart,getUserSuccess,getUserError} = userSlice.actions;
export default userSlice.reducer;
