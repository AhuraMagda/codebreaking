import GameBoardSingleRow from "./GameBoardSingleRow";
import { StyledGameBoard } from "../styles/StyledGameBoard";

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

export default function GameBoardEmpty({
  gameRow1Values,
  gameRow2Values,
  gameRow3Values,
  gameRow4Values,
  correctNums1,
  correctNums2,
  correctNums3,
  correctNums4,
}: GameBoardEmptyProps) {
  return (
    <StyledGameBoard>
      <GameBoardSingleRow
        filledValues={gameRow4Values}
        correctNums={correctNums4}
      />
      <GameBoardSingleRow
        filledValues={gameRow3Values}
        correctNums={correctNums3}
      />
      <GameBoardSingleRow
        filledValues={gameRow2Values}
        correctNums={correctNums2}
      />
      <GameBoardSingleRow
        filledValues={gameRow1Values}
        correctNums={correctNums1}
      />
    </StyledGameBoard>
  );
}
