import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

import ImageSlide from "./components/ImageSlide"; //테스트용

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/detailpage/:id" element={<DetailPage />} />
                    <Route path="/slide" element={<ImageSlide />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
