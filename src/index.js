import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserContextProvider from './Context/UserContext';
import './index.css';
//ensure you import the UserContextProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Make the context globally available by wrapping the App(Parent) component in the context provider
 <UserContextProvider >
   <Router>
  <App />
  </Router>
</UserContextProvider>
);

