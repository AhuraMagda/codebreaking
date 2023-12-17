import { useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";

export default function GameBoard() {

  const [filledRow, setFilledRow] = useState<number[] | []>([])

  const handleBtnClick = (value: number) => {
    filledRow.length < 5 ?
    setFilledRow(prevRow => [...prevRow, value]) : null;
  }

  return (
    <>
      {filledRow}
      <GameBoardSolution />
      <GameBoardEmpty filledValues={filledRow} />
      <GameBoardButtons handleBtnClick={handleBtnClick}/>
    </>
  );
}
