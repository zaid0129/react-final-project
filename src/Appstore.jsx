import { configureStore } from "@reduxjs/toolkit";


import Cardslice from "./Cardslice"

const Appstore= configureStore({
     reducer:{
        cart:Cardslice
     }
});


export default Appstore;