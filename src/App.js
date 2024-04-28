// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Details from './Details';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<h1>welcome</h1>} />
        <Route path="/products/foods/:productId" element={<Details/>} />
      </Routes>
    </Router>
  );
};

export default App;
