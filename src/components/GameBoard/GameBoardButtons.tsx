import { StyledButton } from "../styles/StyledGameBoardButton";
import { StyledGameBoardRow } from "../styles/StyledGameBoardRow";
import { GameBoardButtonsProps } from "./types/GameBoardButtonsTypes";

const GameBoardButtons: React.FC<GameBoardButtonsProps> = ({
  handleBtnClick, rowIndex
}) => {
  const buttonValues = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <StyledGameBoardRow>
        {buttonValues.map((value) => (
          <StyledButton key={value} onClick={() => handleBtnClick(value, rowIndex)}>
            {value}
          </StyledButton>
        ))}
    </StyledGameBoardRow>
  );
};

export default GameBoardButtons;
