

export const addToCart = (product) => {
    console.log("this is action:",product);
    return {
            type: "ADD_TO_CART",
            payload:product,
          
    };
  };

  export const removeFromCart = (product) => {
    console.log("this is action:",product);
    return {
            type: "REMOVE_FROM_CART",
            payload:product,
          
    };
  };

  export const getCart = () => {
    return (dispatch, getState) => {
      
          dispatch({
            type: "GET_CART",
          });
    };
  };