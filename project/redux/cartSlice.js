import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        products:[], 
        total: 0, 
        quantity: 0,
        price: 0,  
    }, 
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload); 
            
            state.quantity += 1; 
            state.total = action.payload.price * state.quantity; 
            state.price = action.payload.price; 
        }, 
        reset: (state) => {
            state.products = []; 
            state.quantity = 0; 
            state.total = 0;
            state.price = 0; 
        }
    }
})



export const {addProduct, reset} = cartSlice.actions; 

export default cartSlice.reducer; 
