import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import MainPage from "./MainPage";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
