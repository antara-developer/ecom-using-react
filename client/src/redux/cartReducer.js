import { createSlice } from '@reduxjs/toolkit'
import { original } from 'immer'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id);

            if (item) {
                item.quantity += action.payload.quantity
                console.log(action.payload.quantity)
            } else {
                state.products.push(action.payload)
            }
        },
        reduceItem: (state, action) =>{
            const item = state.products.find(item => item.id === action.payload.id);
            
            if(item.quantity>1){
                item.quantity-=1;
            }

        },
        addItem:(state, action) => {
            const item = state.products.find(item => item.id === action.payload.id);

            item.quantity+=1;
            
        },
        removeItem: (state, action) => {
            state.products=state.products.filter(item => item.id !== action.payload)
        },
        resetCart: (state) => {
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, reduceItem, addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;