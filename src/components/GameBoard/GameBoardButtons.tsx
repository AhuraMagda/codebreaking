import styled from "styled-components";

interface GameBoardButtonsProps {
  handleBtnClick: (arg: number) => void;
}

const StyledGameBoardRow = styled.div`
  background-color: rgb(119, 194, 206);
  width: 100%;
  height: 100px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(227, 227, 227);
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px black;
  cursor: pointer;
`;

export default function GameBoardButtons({
  handleBtnClick,
}: GameBoardButtonsProps) {
  return (
    <StyledGameBoardRow>
      <StyledButton
        onClick={() => handleBtnClick(1)}
      >
        1
      </StyledButton>
      <StyledButton
        onClick={() => handleBtnClick(2)}
      >
        2
      </StyledButton>
      <StyledButton
  
        onClick={() => handleBtnClick(3)}
      >
        3
      </StyledButton>
      <StyledButton
        onClick={() => handleBtnClick(4)}
      >
        4
      </StyledButton>
      <StyledButton
        onClick={() => handleBtnClick(5)}
      >
        5
      </StyledButton>
    </StyledGameBoardRow>
  );
}
