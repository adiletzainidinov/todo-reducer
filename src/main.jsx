import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
// import Form from './Form.jsx';


// import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Form />} /> */}
        {/* <Route path="/app" element={<App />} /> */}
        <App/>
      {/* </Routes> */}
    {/* </BrowserRouter> */}
  </Provider>
);
