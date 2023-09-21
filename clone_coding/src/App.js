import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//pages
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ImagePage from './pages/ImagePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={<MainPage />} />
        {/* 상세페이지 */}
        <Route path='/articles/:id' element={<DetailPage />} />
        {/* 이미지 전체보기 페이지 */}
        <Route path='/articles/:id/:index' element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
