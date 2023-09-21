import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={"/articles/:post_id"} element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
