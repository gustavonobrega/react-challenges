import Square from "./square";

interface BoardProps {
  squares: string[];
  winningIndexes?: number[];
  onSquareClick: (squareIndex: number) => void;
}

export default function Board({
  squares,
  onSquareClick,
  winningIndexes,
}: BoardProps) {
  return (
    <div className="grid gap-2 max-w-68 w-full">
      <div className="grid grid-cols-3 gap-2">
        <Square
          squares={squares}
          square={0}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
        <Square
          squares={squares}
          square={1}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
        <Square
          squares={squares}
          square={2}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Square
          squares={squares}
          square={3}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
        <Square
          squares={squares}
          square={4}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
        <Square
          squares={squares}
          square={5}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Square
          squares={squares}
          square={6}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
        <Square
          squares={squares}
          square={7}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
        <Square
          squares={squares}
          square={8}
          winningIndexes={winningIndexes}
          handleSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
