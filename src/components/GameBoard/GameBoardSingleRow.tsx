import styled from "styled-components";

interface GameBoardSingleRowProps {
  filledValues: number[] | [];
  correctNums: number;
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

const StyledGameBoardRowCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(227, 227, 227);
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GameBoardSingleRow({
  filledValues,
  correctNums,
}: GameBoardSingleRowProps) {
  return (
    <StyledGameBoardRow>
      <StyledGameBoardRowCircle>{filledValues[0] || ""}</StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>{filledValues[1] || ""}</StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>{filledValues[2] || ""}</StyledGameBoardRowCircle>
      <StyledGameBoardRowCircle>{filledValues[3] || ""}</StyledGameBoardRowCircle>
      <div>{correctNums}</div>
    </StyledGameBoardRow>
  );
}
