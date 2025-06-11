
import { createSlice} from "@reduxjs/toolkit"


let CardSlice = createSlice({
    name:"cart",
    initialState:{
        carditems:[]
    },
    reducers: {
        additem: ( state,action)=>{
            state.carditems.push(action.payload)
        } ,
         removeFromCart: (state, action) => {
        state.carditems = state.carditems.filter(item => item.id !== action.payload);
    }, 
    clearCart: (state) => {
      state.carditems = [];
    },  
    }
})

export default CardSlice.reducer
export const {additem,removeFromCart,clearCart}=CardSlice.actions
