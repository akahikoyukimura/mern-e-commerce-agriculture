import React from "react";

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [action.type.book, ...state];
    default:
      return state;
  }
};

export default bookReducer;
