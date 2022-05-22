import React from "react";

const initState={
    carts:[],
    totalPrice: 0,
    totalQt:0,
};


const CartReducer = (state = initState, action) => {
        console.log("this is payload",action.payload);
        console.log("this is initstate",state);
  switch (action.type) {
    case "ADD_TO_CART":
      //localStorage.setItem("cart", JSON.stringify(state));
      const item = state.carts.find(
        product => product._id === action.payload._id,
      );
      if (item) {
        return {
          ...state,
          carts: state.carts.map(item => item._id === action.payload._id
            ? {
              ...item,
              pQuantity: item.pQuantity + action.payload.pQuantity,
            }
            : item
          ),
          totalPrice: state.totalPrice + (action.payload.pPrice*action.payload.pQuantity),
          totalQt: state.totalQt + action.payload.pQuantity,
        };
        
      }
    
      return {
        ...state,
        carts: [...state.carts, action.payload],
        totalPrice: state.totalPrice + (action.payload.pPrice*action.payload.pQuantity),
        totalQt: state.totalQt + action.payload.pQuantity,
      };
      case "GET_CART":
      return state;
    default:
      return state;
  }
};

export default CartReducer;
