import axios from 'axios';

export default axios.create({
  //baseURL: `https://mern-e-commerce-project.herokuapp.com/`
  baseURL: `http://localhost:5000/`
});