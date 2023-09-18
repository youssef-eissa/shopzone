import { createSlice } from "@reduxjs/toolkit";

const singleProduct = createSlice({
    name: 'singleProduct',
    initialState: {
        value: { array: [], price: 1, allPrices: 0,quantity:1 },
    },
    reducers: {
        productArray: (state, action) => {
            state.value.array=action.payload
        },
        quantity: (state, action) => {
            state.value.quantity=action.payload
        },
        price: (state, action) => {
            state.value=action.payload
        }
    }
})
export const { productArray, price,quantity } = singleProduct.actions
export default singleProduct.reducer