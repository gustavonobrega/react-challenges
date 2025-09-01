import type { ComponentProps } from "react";

interface SquareProps extends ComponentProps<"button"> {
  squares: string[];
  square: number;
  winningIndexes?: number[];
  handleSquareClick: (squareIndex: number) => void;
}

export default function Square({
  squares,
  square,
  winningIndexes,
  handleSquareClick,
}: SquareProps) {
  return (
    <button
      className="flex items-center justify-center text-4xl text-zinc-700 font-bold aspect-square rounded-lg shadow-md transition-transform enabled:cursor-pointer enabled:hover:-translate-y-1 enabled:hover:bg-zinc-600/5 data-[winner=true]:bg-emerald-200 data-[winner=true]:animate-pulse"
      disabled={squares[square].length > 0 || !!winningIndexes}
      onClick={() => handleSquareClick(square)}
      data-winner={
        winningIndexes &&
        squares[square] ===
          (squares[winningIndexes[0]] ||
            squares[winningIndexes[1]] ||
            squares[winningIndexes[2]])
      }
    >
      {squares[square]}
    </button>
  );
}
