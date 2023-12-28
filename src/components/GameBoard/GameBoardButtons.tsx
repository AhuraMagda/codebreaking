import { StyledButton } from "../styles/StyledGameBoardButton";
import { StyledGameBoardRow } from "../styles/StyledGameBoardRow";

interface GameBoardButtonsProps {
  handleBtnClick: (arg: number) => void;
}

export default function GameBoardButtons({
  handleBtnClick,
}: GameBoardButtonsProps) {
  return (
    <StyledGameBoardRow>
      <StyledButton onClick={() => handleBtnClick(1)}>1</StyledButton>
      <StyledButton onClick={() => handleBtnClick(2)}>2</StyledButton>
      <StyledButton onClick={() => handleBtnClick(3)}>3</StyledButton>
      <StyledButton onClick={() => handleBtnClick(4)}>4</StyledButton>
      <StyledButton onClick={() => handleBtnClick(5)}>5</StyledButton>
    </StyledGameBoardRow>
  );
}
