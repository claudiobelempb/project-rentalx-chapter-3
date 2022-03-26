import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/js/src/collapse.js';
import './assets/css/custom.scss';

import { Routes } from 'routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
