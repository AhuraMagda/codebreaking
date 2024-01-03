import GameBoardSingleRow from "./GameBoardSingleRow";
import { StyledGameBoard } from "../styles/StyledGameBoard";

interface GameBoardEmptyProps {
  rows: any;
}

export default function GameBoardEmpty({
  rows
}: GameBoardEmptyProps) {
  return (
    <StyledGameBoard>
      <GameBoardSingleRow
        filledValues={rows[3].values}
        correctNums={rows[3].correctNums}
        correctPlaces={rows[3].correctPlaces}
      />
      <GameBoardSingleRow
        filledValues={rows[2].values}
        correctNums={rows[2].correctNums}
        correctPlaces={rows[2].correctPlaces}
      />
      <GameBoardSingleRow
        filledValues={rows[1].values}
        correctNums={rows[1].correctNums}
        correctPlaces={rows[1].correctPlaces}
      />
      <GameBoardSingleRow
        filledValues={rows[0].values}
        correctNums={rows[0].correctNums}
        correctPlaces={rows[0].correctPlaces}
      />
    </StyledGameBoard>
  );
}
