import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name: 'user',
    initialState: { value:  { name:'',login:false }},
    reducers: {
        loginName: (state, action) => {
            state.value.name = action.payload;
        },
        login: (state) => {
            state.value.login=true
        }
    }
})
export const {loginName,login}=userSlicer.actions
export default userSlicer.reducer