import { StyledGameBoardRow } from "../styles/StyledGameBoardRow";
import { StyledGameBoardRowCircle } from "../styles/StyledGameBoardRowCircle";
import { GameBoardSingleRowProps } from "./types/GameBoardSingleRowTypes";

export default function GameBoardSingleRow({
  rows,
  index,
}: GameBoardSingleRowProps) {
  return (
    <StyledGameBoardRow>
      <StyledGameBoardRowCircle>
        {rows[index].values[0] || ""}
      </StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>
        {rows[index].values[1] || ""}
      </StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>
        {rows[index].values[2] || ""}
      </StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>
        {rows[index].values[3] || ""}
      </StyledGameBoardRowCircle>
      <div>{rows[index].correctNums}</div>
      <div>{rows[index].correctPlaces}</div>
    </StyledGameBoardRow>
  );
}
