import {RegisterStart, RegisterSucess,registerfail} from './userSlice'

export const Register = (async, user) => {
    dispatch(RegisterStart());
    try {
        
    } catch (error) {
        dispatch(registerfail())
    }
}