import GameBoardSingleRow from "./GameBoardSingleRow";

interface GameBoardEmptyProps {
  filledValues: number[] | [];
  filledValues2: number[] | [];
  filledValues3: number[] | [];
  filledValues4: number[] | [];
}

export default function GameBoardEmpty({
  filledValues,
  filledValues2,
  filledValues3,
  filledValues4
}: GameBoardEmptyProps) {
  return (
    <div className="game-board">
      <GameBoardSingleRow filledValues={filledValues4} />
      <GameBoardSingleRow filledValues={filledValues3} />
      <GameBoardSingleRow filledValues={filledValues2} />
      <GameBoardSingleRow filledValues={filledValues} />
    </div>
  );
}
