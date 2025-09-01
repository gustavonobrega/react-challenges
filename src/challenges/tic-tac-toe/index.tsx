import { useState } from "react";
import Players from "./players";
import Board from "./board";
import { range } from "../../utils/range";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

interface GameHistoryType {
  board: string[];
  moves: number[];
}

export default function TicTacToe() {
  const [gameHistory, setGameHistory] = useState<GameHistoryType>({
    board: range(9).map(() => ""),
    moves: [],
  });
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  function onSquareClick(squareIndex: number) {
    if (gameHistory.board[squareIndex].length > 0 || calculateWinner()) return;

    const newHistory = {
      board: [...gameHistory.board],
      moves: [...gameHistory.moves],
    };

    newHistory.board[squareIndex] = currentPlayer;
    newHistory.moves.push(squareIndex);

    setGameHistory(newHistory);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function handleNewGameClick() {
    if (gameHistory.moves.length <= 0) {
      return;
    }

    const newHistory = {
      board: gameHistory.board.map(() => ""),
      moves: [],
    };

    setGameHistory(newHistory);
    setCurrentPlayer("X");
  }

  function calculateWinner() {
    if (gameHistory.moves.length < 3) return;

    for (let i = 0; i < winningConditions.length; i++) {
      const [c1, c2, c3] = winningConditions[i];

      if (
        gameHistory.board[c1] !== "" &&
        gameHistory.board[c1] === gameHistory.board[c2] &&
        gameHistory.board[c1] === gameHistory.board[c3]
      ) {
        return {
          winner: gameHistory.board[c1],
          winningIndexes: [c1, c2, c3],
        };
      }
    }
  }

  const winner = calculateWinner();

  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-zinc-100 space-y-4">
      <h1 className="text-4xl font-bold text-shadow-md text-gray-800">
        Tic Tac Toe
      </h1>

      <Players currentPlayer={currentPlayer} winner={winner?.winner} />
      <Board
        squares={gameHistory.board}
        onSquareClick={onSquareClick}
        winningIndexes={winner?.winningIndexes}
      />

      <button
        disabled={gameHistory.moves.length <= 0}
        onClick={handleNewGameClick}
        className="px-4 py-2 font-semibold rounded-md shadow transition text-emerald-600/60 shadow-emerald-200 enabled:cursor-pointer hover:text-emerald-600/70 enabled:hover:shadow-md disabled:text-gray-600/60 disabled:shadow-gray-200"
      >
        New Game
      </button>
    </div>
  );
}
