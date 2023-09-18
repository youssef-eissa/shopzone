import { createSlice } from "@reduxjs/toolkit";


export const productsFiltered = createSlice({
    name: 'filteredProducts',
    initialState: { value: [] },
    reducers: {
        filteredProducts: (state, action) => {
            state.value=action.payload
        },
        resetFilters: (state) => {
            state.value=[]
        }
    }
})
export const { filteredProducts,resetFilters } = productsFiltered.actions
export default productsFiltered.reducer