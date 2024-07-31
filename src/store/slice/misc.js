import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode:false,
  isFriend:[],
  isNotification: false,
  isMobileView:false,
  isMobileAvatar:false,
  isSearch: false,
  isFileMenu: false,
  uploadingLoader: false,
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setIsDarkMode: (state,action)=>{
      state.isDarkMode = action.payload;
    },
    setIsNotification: (state, action) => {
      state.isNotification = action.payload;
    },
    setIsMobileView:(state,action)=>{
        state.isMobileView = action.payload;
    },
    setIsMobileAvatar:(state,action)=>{
        state.isMobileAvatar = action.payload;
    },
    setIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    setIsFileMenu: (state, action) => {
      state.isFileMenu = action.payload;
    },
    setUploadingLoader: (state, action) => {
      state.uploadingLoader = action.payload;
    },
    setIsFriendTrue: (state,action)=>{
      state.isFriend.push(action.payload);
    },
    setIsFriendFalse: (state,action)=>{
      const newArray = state.isFriend.filter((item)=>item !== action.payload);
      state.isFriend = [...newArray];
    }
  },
});

export default miscSlice.reducer;
export const {setIsNotification,setIsMobile,setIsSearch,setIsFileMenu,setUploadingLoader,setIsMobileView,setIsFriendTrue,setIsFriendFalse,setIsDarkMode,setIsMobileAvatar} = miscSlice.actions;