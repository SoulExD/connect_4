import React from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/connect_4" element={<Home />} />
        <Route path="/connect_4/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
