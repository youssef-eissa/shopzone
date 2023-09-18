import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
    name: 'cart',
    initialState: { value: {array:[],allPrice:1,price:1,quantity:1} },
    reducers: {
        carts: (state, action) => {
            const existingProductIndex = state.value.array.findIndex(product => product.id === action.payload.id)
            const existingProduct=state.value.array[existingProductIndex]
            if (existingProduct) {
                const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + state.value.quantity }
                state.value.array[existingProductIndex]=updatedProduct

            } else { state.value.array.push(action.payload)};
        },
        resetCarts: (state) => {
            state.value=[]
        },
        quantity: (state, action) => {
            state.value.quantity=action.payload
        },
        productQuantityInc: (state, action) => {
            const currentProductIndex = state.value.array.findIndex(product => product.id === action.payload.id)
            state.value.array[currentProductIndex] = action.payload
            
        },
        productQuantityDec: (state, action) => {
            const currentProductIndex = state.value.array.findIndex(product => product.id === action.payload.id)
            state.value.array[currentProductIndex]=action.payload
        },
        allPrice: (state) => {
            const Subtotal = state.value.array.reduce((acc, curr) => {
            return acc+curr.price*curr.quantity
            }, 0)
            state.value.allPrice=Subtotal
        },
        deleteProduct: (state, action) => {
            const removedProduct = state.value.array.filter(product => {
                return product.id!==action.payload.id
            })
            state.value.array = removedProduct
            if (state.value.array.length===0) {
                state.value.allPrice=0
            }
        }


    }
})
export const { carts, resetCarts, quantity, productQuantityInc, allPrice,productQuantityDec,deleteProduct  } = cartSlicer.actions

export default cartSlicer.reducer
