import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import './App.css';
const App = () => {
  return (
    <div className='center'>
      <h1>Hello to combined world</h1>
      <h5>refersh to display random message</h5>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
};
export default App;