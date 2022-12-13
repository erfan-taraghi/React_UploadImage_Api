import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Content from './Content';
import ShowData from './components/ShowData';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="gallery" element ={<ShowData/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
