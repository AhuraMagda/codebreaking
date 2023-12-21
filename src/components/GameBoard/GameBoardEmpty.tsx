import GameBoardSingleRow from "./GameBoardSingleRow";

interface GameBoardEmptyProps {
  gameRow1Values: number[] | [];
  gameRow2Values: number[] | [];
  gameRow3Values: number[] | [];
  gameRow4Values: number[] | [];
}

// gameRow = [1, 2, 2, 1]
// solution = [1, 1, 3, 3]
// check if 1 in solution, and delete it, check next...
// 


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
