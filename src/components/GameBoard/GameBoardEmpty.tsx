import GameBoardSingleRow from "./GameBoardSingleRow";

interface GameBoardEmptyProps {
  gameRow1Values: number[] | [];
  gameRow2Values: number[] | [];
  gameRow3Values: number[] | [];
  gameRow4Values: number[] | [];
  correctNums1: number;
  correctNums2: number;
  correctNums3: number;
  correctNums4: number;
}

// gameRow = [1, 2, 2, 1]
// solution = [1, 1, 3, 3]
// check if 1 in solution, and delete it, check next...
// 


export default function GameBoardEmpty({
  gameRow1Values,
  gameRow2Values,
  gameRow3Values,
  gameRow4Values,
  correctNums1,
  correctNums2,
  correctNums3,
  correctNums4
}: GameBoardEmptyProps) {





  return (
    <div className="game-board">
      <GameBoardSingleRow filledValues={gameRow4Values} correctNums={correctNums4}/>
      <GameBoardSingleRow filledValues={gameRow3Values} correctNums={correctNums3}/>
      <GameBoardSingleRow filledValues={gameRow2Values} correctNums={correctNums2}/>
      <GameBoardSingleRow filledValues={gameRow1Values} correctNums={correctNums1} />
    </div>
  );
}
