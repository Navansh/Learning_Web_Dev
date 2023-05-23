import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add : (state,action) => {
            state.push(action.payload)
            //action.payload signifies the input parameter you've sent
        },
        remove : (state,action) => {
            //input mein product ki ID aa rhi hai, so we'll filter according to that
            return state.filter((product) => product.id !== action.payload) 
            //hence, state ke andar sirf woh items ko retain karna jinki id is not equal to action.payload(which is ID
            //that we've passed ) 
        }
    }
})

export const {add,remove } = CartSlice.actions
export default CartSlice.reducer;