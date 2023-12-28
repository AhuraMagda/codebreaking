import { StyledGameBoardRow } from "../styles/StyledGameBoardRow";
import { StyledGameBoardRowCircle } from "../styles/StyledGameBoardRowCircle";

interface GameBoardSingleRowProps {
  filledValues: number[] | [];
  correctNums: number;
}

export default function GameBoardSingleRow({
  filledValues,
  correctNums,
}: GameBoardSingleRowProps) {
  return (
    <StyledGameBoardRow>
      <StyledGameBoardRowCircle>
        {filledValues[0] || ""}
      </StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>
        {filledValues[1] || ""}
      </StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>
        {filledValues[2] || ""}
      </StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>
        {filledValues[3] || ""}
      </StyledGameBoardRowCircle>
      <div>{correctNums}</div>
    </StyledGameBoardRow>
  );
}
