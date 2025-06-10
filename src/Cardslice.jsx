
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
    }
})

export default CardSlice.reducer
export const {additem,removeFromCart}=CardSlice.actions
