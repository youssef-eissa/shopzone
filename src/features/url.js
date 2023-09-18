import { createSlice } from "@reduxjs/toolkit";


const urlSlicer = createSlice({
    name: 'url',
    initialState: { value: '' },
    reducers: {
        urlPage: (state, action) => {
            state.value= action.payload
        },
        resetUrl: (state) => {
            state.value=''
        }
    }
})
export const { urlPage,resetUrl } = urlSlicer.actions
export default urlSlicer.reducer
