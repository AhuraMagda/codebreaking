// import GameBoardSingleRow from "./GameBoardSingleRow";

type GameBoardSolutionProps = {
  filledValues: number[];
}

export default function GameBoardSolution({ filledValues }: GameBoardSolutionProps) {
  return (
    <div className="game-board__row">
      <div className="game-board__row__circle">{filledValues[0] || ""}</div>
      <div className="game-board__row__circle">{filledValues[1] || ""}</div>
      <div className="game-board__row__circle">{filledValues[2] || ""}</div>
      <div className="game-board__row__circle">{filledValues[3] || ""}</div>
      <div className="game-board__row__circle">{filledValues[4] || ""}</div>
    </div>
  );
}
