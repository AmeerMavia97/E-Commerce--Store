import {createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
    name: 'E-Commerce',
    initialState:{
        Products: []
    },
    reducers:{
        ShowMore: (state , action)=>{
            state.Products.push({
                title: action.payload.title,
                description: action.payload.description,
                image: action.payload.image,
                price: action.payload.price,       
            })
        }
    },
})


export const {ShowMore} = ProductSlice.actions
export default ProductSlice.reducer