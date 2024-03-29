import { StyledGameBoardRow } from "../styles/StyledGameBoardRow";
import { StyledGameBoardRowCircle } from "../styles/StyledGameBoardRowCircle";
import { GameBoardSolutionProps } from "./types/GameBoardSolutionProps";

export default function GameBoardSolution({ values }: GameBoardSolutionProps) {
  return (
    <StyledGameBoardRow>
      <StyledGameBoardRowCircle>{values[0]}</StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>{values[1]}</StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>{values[2]}</StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>{values[3]}</StyledGameBoardRowCircle>
    </StyledGameBoardRow>
  );
}
