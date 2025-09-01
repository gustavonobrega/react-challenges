interface ScoreProps {
  currentPlayer: string;
  winner: string | undefined;
}

export default function players({ currentPlayer, winner }: ScoreProps) {
  return (
    <div className="flex gap-2">
      <div
        className="flex items-center justify-center rounded-lg py-3 px-6 text-zinc-600 data-[active=true]:text-zinc-900 data-[active=true]:bg-zinc-100 data-[active=true]:shadow-[0_0_10px] data-[active=true]:shadow-zinc-400/50 transition-all"
        data-active={winner === "X" || (!winner && currentPlayer === "X")}
      >
        <p className="text-lg">Player X</p>
      </div>
      <div
        className="flex items-center justify-center rounded-lg py-3 px-6 text-zinc-600 data-[active=true]:text-zinc-900 data-[active=true]:bg-zinc-100 data-[active=true]:shadow-[0_0_10px] data-[active=true]:shadow-zinc-400/50 transition-all"
        data-active={winner === "O" || (!winner && currentPlayer === "O")}
      >
        <p className="text-lg">Player O</p>
      </div>
    </div>
  );
}
