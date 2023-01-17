import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: {},
    isFetching: false,
    error:false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    RegisterStart: state => {
        state.isFetching = true;
    },
    RegisterSucess: (state, action) => {
        state.currentUser = action.payload,
        state.isFetching= false,
        state.error =false
    },
    registerfail: state => {
        state.currentUser = null
        state.error = true
    },
    LoginStart: state => {
        state.isFetching = true;
    },
    LoginSucess: (state, action) => {
        state.currentUser = action.payload,
        state.isFetching= false,
        state.error =false
    },
    Loginfail: state => {
        state.currentUser = null
        state.error = true
    },
    logout: state => {
        state.currentUser = null
    }
  }
});

export const { RegisterStart, RegisterSucess, registerfail, logout} = userSlice.actions

export default userSlice.reducer