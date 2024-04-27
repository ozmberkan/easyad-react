import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlexContainer from './contanier/Container';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Update from './pages/Updates';
import data from './data/data';


export default function App() {
  return (
    <Router>
      <FlexContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Detail data={data} />} />
          <Route path='/updates' element={<Update />} />
        </Routes>
      </FlexContainer>
    </Router>
  )
}
