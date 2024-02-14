import {createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name: 'E-Commerce',
    initialState:{
        Products: []
    },
    reducers:{
        ShowMore: (state , action)=>{
            state.Products.push(action.payload)
        }
    },
})


export const {ShowMore} = ProductSlice.actions
export default ProductSlice.reducer