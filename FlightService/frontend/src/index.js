import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/index'
// import dotenv from 'dotenv';

// import 'dotenv/config';
// dotenv.config({ path: path.join(__dirname, '../.env.example') });


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer: reducers});

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
