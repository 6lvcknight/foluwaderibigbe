import React, { useState, useEffect } from "react";
import "../constants/NotFound.css";
import { generateSudoku } from "../utils/sudokuGenerator";

const NotFound = () => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [board, setBoard] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [gameState, setGameState] = useState(false);
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [errorCells, setErrorCells] = useState([]);


  useEffect(() => {
    let interval;
    if (gameState) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
      return () => clearInterval(interval);

  }, [gameState]);

  useEffect(() => {
    resetGame();
  }, []);

  function toggleGameState() {
    setGameState((prevState) => !prevState);
  }

  function resetGame() {
    const { puzzle } = generateSudoku(40);
    setBoard(puzzle);
    setElapsedTime(0);
    setGameState(false);
  }

  function placeNumber(row, col) {
    if (selectedNumber !== null) {
      const newBoard = board.map((r) => [...r]);
      newBoard[row][col] = selectedNumber;
      setBoard(newBoard);
      checkForErrors(row, col, selectedNumber, newBoard);
      highlightCells(row, col);
    }
  }

  function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function highlightCells(row, col) {
    let newHighlighted = [];
    
    // Highlight row and column
    for (let i = 0; i < 9; i++) {
        newHighlighted.push(`${row}-${i}`);
        newHighlighted.push(`${i}-${col}`);
    }

    // Highlight 3x3 grid
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            newHighlighted.push(`${r}-${c}`);
        }
    }

    setHighlightedCells(newHighlighted);
  }

  function checkForErrors(row, col, number, currentBoard) {
    let newErrors = [];

    // Check row and column, excluding the current cell
    for (let i = 0; i < 9; i++) {
      if (i !== col && currentBoard[row][i] === number) {
        newErrors.push(`${row}-${i}`);
      }
      if (i !== row && currentBoard[i][col] === number) {
        newErrors.push(`${i}-${col}`);
      }
    }

    // Check 3x3 grid, skipping the current cell
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if ((r !== row || c !== col) && currentBoard[r][c] === number) {
          newErrors.push(`${r}-${c}`);
        }
      }
    }

    setErrorCells(newErrors);
  }


  return (
    <div className="flex flex-col items-center">
      {/* Start / Stop Game Button */}
      {gameState ? (
        <div className="grid grid-rows-1 grid-cols-2 gap-2 mt-2">
          <button
            onClick={toggleGameState}
            className="inline-flex items-center px-4 py-2 text-sm font-medium border m-2 rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 focus:ring-neutral-700"
          >
            {gameState ? "Stop Game" : "Start Game"}
          </button>
          <button
            onClick={resetGame}
            className="inline-flex items-center px-4 py-2 text-sm font-medium border m-2 rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 focus:ring-neutral-700"
          >
            Reset Game
          </button>
        </div>  
        ):(
        <div className="mt-2">
        <button
          onClick={toggleGameState}
          className="inline-flex items-center px-4 py-2 text-sm font-medium border m-2 rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 focus:ring-neutral-700"
        >
          {gameState ? "Stop Game" : "Start Game"}
        </button>
      </div>
      )}

      {/* Timer */}
      <p className="mb-2">Time: {formatTime(elapsedTime)}</p>

      {/* Sudoku Board & Options (only visible when game is running) */}
      {gameState && (
        <>
          <table>
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`inline-flex items-center justify-center w-12 h-12 text-lg font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none
                        text-neutral-400 border-neutral-600 focus:ring-neutral-700
                        ${cell === -1 ? "cursor-pointer" : "bg-neutral-800"}
                        ${errorCells.includes(`${rowIndex}-${colIndex}`) ? "error-class" : ""}
                      `}
                      onClick={() => placeNumber(rowIndex, colIndex)}
                      style={{
                        backgroundColor: highlightedCells.includes(`${rowIndex}-${colIndex}`)
                          ? "rgb(64, 64, 64)"
                          : "transparent",
                        backgroundColor: errorCells.includes(`${rowIndex}-${colIndex}`)
                          ?  "rgb(0, 0, 0)"
                          : "",
                      }}
                    >
                      {cell === -1 ? "" : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Number Options */}
          <div className="mt-2">
            {options.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedNumber(item)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 focus:ring-neutral-700"
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NotFound;
