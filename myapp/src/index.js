import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //we can render only one tag. encapsulate them into one tag
  // <React.StrictMode>
  // fragment
    <> 
    <Navbar/>
    <App />
    </>
  // </React.StrictMode>
);