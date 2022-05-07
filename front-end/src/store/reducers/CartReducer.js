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
      const item = state.carts.find(
        product => product.id === action.payload.id,
      );
    
      if (item) {
        return {
          ...state,
          carts: state.carts.map(item => item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            }
            : item
          ),
          totalPrice: state.totalPrice + (action.payload.price*action.payload.quantity),
          totalQt: state.totalQt + action.payload.quantity,
        };
      }
    
      return {
        ...state,
        carts: [...state.carts, action.payload],
        totalPrice: state.totalPrice + (action.payload.price*action.payload.quantity),
        totalQt: state.totalQt + action.payload.quantity,
      };
      case "GET_CART":
      return state;
    default:
      return state;
  }
};

export default CartReducer;
