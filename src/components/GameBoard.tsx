import { useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";

export default function GameBoard() {

  const [filledRow1, setFilledRow1] = useState<number[] | []>([])
  const [filledRow2, setFilledRow2] = useState<number[] | []>([])
  const [filledRow3, setFilledRow3] = useState<number[] | []>([])
  const [filledRow4, setFilledRow4] = useState<number[] | []>([])

  const handleBtnClick = (value: number) => {
    if (filledRow1.length < 5) {
    setFilledRow1(prevRow => [...prevRow, value])
    } else if (filledRow2.length < 5) {
      setFilledRow2(prevRow => [...prevRow, value])
    } else if (filledRow3.length < 5) {
      setFilledRow3(prevRow => [...prevRow, value])
    } else if (filledRow4.length < 5) {
      setFilledRow4(prevRow => [...prevRow, value])
    }
  };
  

  return (
    <>
      <GameBoardSolution />
      <GameBoardEmpty 
      filledValues={filledRow1} 
      filledValues2={filledRow2}
      filledValues3={filledRow3}
      filledValues4={filledRow4}
      />
      <GameBoardButtons handleBtnClick={handleBtnClick}/>
    </>
  );
}
