import GameBoardSingleRow from "./GameBoardSingleRow";
import { StyledGameBoard } from "../styles/StyledGameBoard";

interface GameBoardEmptyProps {
  gameRowValues: {[key: string]: number[] | []};
  correctNums: {[key: string]: number}
  correctPlaces: {[key: string]: number}
}

export default function GameBoardEmpty({
  gameRowValues,
  correctNums,
  correctPlaces
}: GameBoardEmptyProps) {
  return (
    <StyledGameBoard>
      <GameBoardSingleRow
        filledValues={gameRowValues.gameRow4Values}
        correctNums={correctNums.howManyCorrectNums4}
        correctPlaces={correctPlaces.howManyCorrectPlaces4}
      />
      <GameBoardSingleRow
        filledValues={gameRowValues.gameRow3Values}
        correctNums={correctNums.howManyCorrectNums3}
        correctPlaces={correctPlaces.howManyCorrectPlaces3}
      />
      <GameBoardSingleRow
        filledValues={gameRowValues.gameRow2Values}
        correctNums={correctNums.howManyCorrectNums2}
        correctPlaces={correctPlaces.howManyCorrectPlaces2}
      />
      <GameBoardSingleRow
        filledValues={gameRowValues.gameRow1Values}
        correctNums={correctNums.howManyCorrectNums1}
        correctPlaces={correctPlaces.howManyCorrectPlaces1}
      />
    </StyledGameBoard>
  );
}
