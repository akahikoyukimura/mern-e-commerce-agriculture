import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav_bar from './components/Nav_bar';
import AddBook from './components/books/AddBook';
import { createStore ,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Nav_bar/>
    <AddBook/>
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
