import { createSlice } from "@reduxjs/toolkit";

export const productSlicer = createSlice({
    name: 'product',
    initialState: { value: [] },
    reducers: {
        allProducts: (state, action) => {
            state.value=action.payload
        },
        productPage: (state, action) => {
            state.value=action.payload
        },
        resetProducts: (state) => {
            state.value=[]
        },
        productDetails: (state, action) => {
            state.value.push(action.payload)
        }
    }
})
export const { allProducts,resetProducts,productPage,productDetails } = productSlicer.actions
export default productSlicer.reducer
