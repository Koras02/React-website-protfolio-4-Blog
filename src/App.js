import React from 'react';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import MainPage from './components';



function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MainPage} />
    </BrowserRouter>
  );
}

export default App;
