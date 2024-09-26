import React, { useState } from "react";
import { Player } from "../interface/types";
import Cell from "./Cell";
import Popup from "./Popup";

const ROWS = 6;
const COLUMNS = 7;

const GameBoard: React.FC = () => {
  const [grid, setGrid] = useState<Player[][]>(
    Array(ROWS).fill(Array(COLUMNS).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("Red");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  // Handle cell click
  const handleClick = (column: number) => {
    if (isGameOver) return;

    const newGrid = [...grid];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newGrid[row][column]) {
        newGrid[row] = [...newGrid[row]];
        newGrid[row][column] = currentPlayer;
        break;
      }
    }

    setGrid(newGrid);

    if (checkWinner(newGrid, currentPlayer)) {
      setIsGameOver(true);
      setTimeout(() => {
        setPopupMessage(`${currentPlayer} wins!`);
      }, 1000);
      return;
    }

    if (isGridFull()) {
      setIsGameOver(true);
      setTimeout(() => {
        setPopupMessage(`It's a draw!`);
      }, 1000);
      return;
    }

    setCurrentPlayer(currentPlayer === "Red" ? "Yellow" : "Red");
  };

  // Check if the grid is full
  const isGridFull = () => {
    return grid.every((row) => row.every((cell) => cell !== null));
  };

  // Check for a winning combination
  const checkWinner = (grid: Player[][], player: Player): boolean => {
    const checkLine = (a: Player, b: Player, c: Player, d: Player) => {
      return a === player && b === player && c === player && d === player;
    };

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        if (
          col + 3 < COLUMNS &&
          checkLine(
            grid[row][col],
            grid[row][col + 1],
            grid[row][col + 2],
            grid[row][col + 3]
          )
        ) {
          return true;
        }
        if (
          row + 3 < ROWS &&
          checkLine(
            grid[row][col],
            grid[row + 1][col],
            grid[row + 2][col],
            grid[row + 3][col]
          )
        ) {
          return true;
        }
        if (
          row + 3 < ROWS &&
          col + 3 < COLUMNS &&
          checkLine(
            grid[row][col],
            grid[row + 1][col + 1],
            grid[row + 2][col + 2],
            grid[row + 3][col + 3]
          )
        ) {
          return true;
        }
        if (
          row + 3 < ROWS &&
          col - 3 >= 0 &&
          checkLine(
            grid[row][col],
            grid[row + 1][col - 1],
            grid[row + 2][col - 2],
            grid[row + 3][col - 3]
          )
        ) {
          return true;
        }
      }
    }
    return false;
  };

  // Reset game state
  const resetGame = () => {
    setGrid(Array(ROWS).fill(Array(COLUMNS).fill(null)));
    setCurrentPlayer("Red");
    setIsGameOver(false);
    setPopupMessage(null); // Close popup on reset
  };

  return (
    <div>
      <div className="flex justify-center py-10">
        <h2>
          {isGameOver ? "Game Over!" : `Current Player: ${currentPlayer}`}
        </h2>
      </div>
      <div className="board">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={cell}
                onClick={() => handleClick(colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="h-[40px] flex justify-center py-10">
        {/* Show the popup when there is a message */}
        {popupMessage && <Popup message={popupMessage} onClose={resetGame} />}
      </div>
    </div>
  );
};

export default GameBoard;
