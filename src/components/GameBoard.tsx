import { useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";

export default function GameBoard() {

  const [isSuccess, setIsSuccess] = useState(false)

  const [gameRow1Values, setgameRow1Values] = useState<number[] | []>([])
  const [gameRow2Values, setgameRow2Values] = useState<number[] | []>([])
  const [gameRow3Values, setgameRow3Values] = useState<number[] | []>([])
  const [gameRow4Values, setgameRow4Values] = useState<number[] | []>([])

  const handleBtnClick = (value: number) => {
    if (gameRow1Values.length < 5) {
    setgameRow1Values(prevRow => [...prevRow, value])
    } else if (gameRow2Values.length < 5) {
      setgameRow2Values(prevRow => [...prevRow, value])
    } else if (gameRow3Values.length < 5) {
      setgameRow3Values(prevRow => [...prevRow, value])
    } else if (gameRow4Values.length < 5) {
      setgameRow4Values(prevRow => [...prevRow, value])
    } else {
      console.log("game over")
    }
  };
  

  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      <GameBoardSolution />
      <GameBoardEmpty 
      gameRow1Values={gameRow1Values} 
      gameRow2Values={gameRow2Values}
      gameRow3Values={gameRow3Values}
      gameRow4Values={gameRow4Values}
      />
      <GameBoardButtons handleBtnClick={handleBtnClick}/>
    </>
  );
}
