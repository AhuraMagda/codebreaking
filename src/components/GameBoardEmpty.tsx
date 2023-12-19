import GameBoardSingleRow from "./GameBoardSingleRow";

interface GameBoardEmptyProps {
  gameRow1Values: number[] | [];
  gameRow2Values: number[] | [];
  gameRow3Values: number[] | [];
  gameRow4Values: number[] | [];
}

export default function GameBoardEmpty({
  gameRow1Values,
  gameRow2Values,
  gameRow3Values,
  gameRow4Values
}: GameBoardEmptyProps) {
  return (
    <div className="game-board">
      <GameBoardSingleRow filledValues={gameRow4Values} />
      <GameBoardSingleRow filledValues={gameRow3Values} />
      <GameBoardSingleRow filledValues={gameRow2Values} />
      <GameBoardSingleRow filledValues={gameRow1Values} />
    </div>
  );
}
