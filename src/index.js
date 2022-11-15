import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
//STORE is the global state that holds all of the data from the applicaiton


//ACTION -> describes what we want to do 

//REDUCER -> describe how actions transfer one state to another


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

