import { useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";

export default function GameBoard() {

  const [filledRow, setFilledRow] = useState<number[] | []>([])

  const handleBtnClick = (value: number) => {
    setFilledRow(prevRow => [...prevRow, value])
  }
  return (
    <>
      <GameBoardSolution />
      <GameBoardEmpty filledValues={filledRow} />
      <GameBoardButtons handleBtnClick={handleBtnClick}/>
    </>
  );
}
