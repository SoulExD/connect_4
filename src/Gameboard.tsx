// src/GameBoard.tsx
import React, { useState } from "react";
import { Player} from "./interface/types";
import Cell from "./components/Cell";
import "./App.css";

const ROWS = 6;
const COLUMNS = 7;

const GameBoard: React.FC = () => {
  const [grid, setGrid] = useState<Player[][]>(
    Array(ROWS).fill(Array(COLUMNS).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("Red");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const handleClick = (column: number) => {
    if (isGameOver) return;

    // Find the lowest empty cell in the column
    const newGrid = [...grid];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newGrid[row][column]) {
        newGrid[row] = [...newGrid[row]]; // avoid mutating the original row
        newGrid[row][column] = currentPlayer;
        break;
      }
    }

    setGrid(newGrid);

    // Check for a winner
    if (checkWinner(newGrid, currentPlayer)) {
      setIsGameOver(true);
      alert(`${currentPlayer} wins!`);
      return;
    }

    // Switch players
    setCurrentPlayer(currentPlayer === "Red" ? "Yellow" : "Red");
  };

  const checkWinner = (grid: Player[][], player: Player): boolean => {
    // Horizontal, vertical, and diagonal checks
    const checkLine = (a: Player, b: Player, c: Player, d: Player) => {
      return a === player && b === player && c === player && d === player;
    };

    // Check all rows, columns, and diagonals
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

  return (
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
      {isGameOver && (
        <button onClick={() => window.location.reload()}>Restart</button>
      )}
    </div>
  );
};

export default GameBoard;
