import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: {},
    isFetching: false,
    error:false
}

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  }
});

export const { LoginStart, LoginSucess, Loginfail} = loginSlice.actions

export default loginSlice.reducer