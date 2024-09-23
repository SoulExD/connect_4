import React from "react";
import GameBoard from "./Gameboard";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <GameBoard />
    </div>
  );
};

export default App;
