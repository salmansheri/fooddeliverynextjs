import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user", 
    initialState: {
        name: "",
        password: ""
    }, 
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name; 
            state.password = action.payload.password; 
        }
    }
})

export const {addUser} = userSlice.actions 

export default userSlice.reducer; 

