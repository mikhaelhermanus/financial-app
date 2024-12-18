import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user:null
}

const registerSlice = createSlice({
    name : 'register',
    initialState, 
    reducers:{
        setRegister: (state, action) =>{
            const { data } = action.payload
            state.user = data
        }
    }
})

export const {setRegister } = registerSlice.actions;
export default registerSlice.reducer;