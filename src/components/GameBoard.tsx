import { useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";

export default function GameBoard() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const successArr = [1, 3, 4, 2, 5];

  const [gameRow1Values, setGameRow1Values] = useState<number[] | []>([]);
  const [gameRow2Values, setGameRow2Values] = useState<number[] | []>([]);
  const [gameRow3Values, setGameRow3Values] = useState<number[] | []>([]);
  const [gameRow4Values, setGameRow4Values] = useState<number[] | []>([]);

  const handleBtnClick = (value: number) => {
    if (gameRow1Values.length < 5) {
      setGameRow1Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, successArr);
        return newRow;
      });
    } else if (gameRow2Values.length < 5) {
      setGameRow2Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, successArr);
        return newRow;
      });
    } else if (gameRow3Values.length < 5) {
      setGameRow3Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, successArr);
        return newRow;
      });
    } else if (gameRow4Values.length < 5) {
      setGameRow4Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, successArr);
        return newRow;
      });
    }
  };

  const checkIfSuccess = (checkedArr: number[], successArr: number[]) => {
    if (checkedArr.toString() === successArr.toString()) {
      setIsSuccess(true);
      return;
    } else if (gameRow4Values.length === 4) {
      setIsFailure(true);
    }
  };

  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution filledValues={successArr} />
      <GameBoardEmpty
        gameRow1Values={gameRow1Values}
        gameRow2Values={gameRow2Values}
        gameRow3Values={gameRow3Values}
        gameRow4Values={gameRow4Values}
      />
      {isFailure || isSuccess ? (
        <button>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={handleBtnClick} />
      )}
    </>
  );
}
