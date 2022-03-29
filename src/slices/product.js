import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const productSlice = createSlice({
    name:'product',
    initialState: {
        isOpen:false,
        product:{},
        activeImageUrl:'',
        images:[],
        pageClicked:false,
    },
    reducers: {
       showModal:(state) => {
           state.isOpen = true;
       },
       hideModal:(state) => {
           state.isOpen = false;
       },
       setProduct:(state,action) => {
        state.product = action.payload;
      },
      setActiveImageUrl:(state,action) => {
        state.activeImageUrl = action.payload;
      },
      setImages:(state,action) => {
        state.images = action.payload;
      },
      togglePageClicked:(state) => {
        state.pageClicked = !state.pageClicked;
      },
      reset:(state) => {
        state.isOpen = false;
        state.product = {};
        state.activeImageUrl = '';
        state.images = [];
        state.pageClicked = false;
      },
      changeQuantity: (state, action) => {
      const newProduct=state.product;

            if (
              parseInt( action.payload.amount) >=
              parseInt(newProduct.quantity)
            ) {
              toast.info(`Only ${newProduct.quantity}  items available store!`, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
            
              newProduct.quantity =  action.payload.amount;
            }
      },
    }
});