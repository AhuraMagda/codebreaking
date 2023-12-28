import { StyledGameBoardRow } from "../styles/StyledGameBoardRow";
import { StyledGameBoardRowCircle } from "../styles/StyledGameBoardRowCircle";

type GameBoardSolutionProps = {
  filledValues: number[];
};

export default function GameBoardSolution({
  filledValues,
}: GameBoardSolutionProps) {
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
    </StyledGameBoardRow>
  );
}
