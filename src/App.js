import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
const App = () => {
  return (
    <div h2 className='center'>
      <h1>Hello to combined world</h1>
      <h5>refersh to display random message</h5>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
};
export default App;