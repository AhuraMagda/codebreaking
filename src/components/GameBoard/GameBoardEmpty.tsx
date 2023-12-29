import GameBoardSingleRow from "./GameBoardSingleRow";
import { StyledGameBoard } from "../styles/StyledGameBoard";

interface GameBoardEmptyProps {
  gameRowsValues: number[][];
  correctNums: number[];
  correctPlaces: number[];
}

export default function GameBoardEmpty({
  gameRowsValues,
  correctNums,
  correctPlaces
}: GameBoardEmptyProps) {
  return (
    <StyledGameBoard>
      <GameBoardSingleRow
        filledValues={gameRowsValues[3]}
        correctNums={correctNums[3]}
        correctPlaces={correctPlaces[3]}
      />
      <GameBoardSingleRow
        filledValues={gameRowsValues[2]}
        correctNums={correctNums[2]}
        correctPlaces={correctPlaces[2]}
      />
      <GameBoardSingleRow
        filledValues={gameRowsValues[1]}
        correctNums={correctNums[1]}
        correctPlaces={correctPlaces[1]}
      />
      <GameBoardSingleRow
        filledValues={gameRowsValues[0]}
        correctNums={correctNums[0]}
        correctPlaces={correctPlaces[0]}
      />
    </StyledGameBoard>
  );
}
