import axios from "axios";
import {url} from "../../api"

export const addBook = (book) => {
    return (dispatch, getState) => {
      axios
        .post(`${url}/books`, book)
        .then((book) => {
          dispatch({
            type: "ADD_BOOK",
            book,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };