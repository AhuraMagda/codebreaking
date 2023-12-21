import { useEffect, useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";
import { checkIfCorrectNum } from "./helpers/checkIfCorrectNum";

export default function GameBoard() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const solution = [1, 3, 4, 2];

  const [gameRow1Values, setGameRow1Values] = useState<number[] | []>([]);
  const [gameRow2Values, setGameRow2Values] = useState<number[] | []>([]);
  const [gameRow3Values, setGameRow3Values] = useState<number[] | []>([]);
  const [gameRow4Values, setGameRow4Values] = useState<number[] | []>([]);

  const [howManyCorrectNums1, setHowManyCorrectNums1] = useState(0);
  const [howManyCorrectNums2, setHowManyCorrectNums2] = useState(0);
  const [howManyCorrectNums3, setHowManyCorrectNums3] = useState(0);
  const [howManyCorrectNums4, setHowManyCorrectNums4] = useState(0);

  

  const handleBtnClick = (value: number) => {
    if (gameRow1Values.length < 4) {
      setGameRow1Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, solution);
        if (gameRow1Values.length === 3) {
          setHowManyCorrectNums1(checkIfCorrectNum(newRow, solution));
        }  
        return newRow;
      });
    } else if (gameRow2Values.length < 4) {
      setGameRow2Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, solution);
        if (gameRow2Values.length === 3) {
          setHowManyCorrectNums2(checkIfCorrectNum(newRow, solution));
        }  
        return newRow;
      });
    } else if (gameRow3Values.length < 4) {
      setGameRow3Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, solution);
        if (gameRow3Values.length === 3) {
          setHowManyCorrectNums3(checkIfCorrectNum(newRow, solution));
        }  
        return newRow;
      });
    } else if (gameRow4Values.length < 4) {
      setGameRow4Values((prevRow) => {
        const newRow = [...prevRow, value];
        checkIfSuccess(newRow, solution);
        if (gameRow4Values.length === 3) {
          setHowManyCorrectNums4(checkIfCorrectNum(newRow, solution));
        }  
        return newRow;
      });
    }
  };


  const checkIfSuccess = (checkedArr: number[], solution: number[]) => {
    if (checkedArr.toString() === solution.toString()) {
      setIsSuccess(true);
      return;
    } else if (checkedArr.length === 4) {
      return
    } else if (gameRow4Values.length === 4) {
      setIsFailure(true);
    }
  };

  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution filledValues={solution} />
      <GameBoardEmpty
        gameRow1Values={gameRow1Values}
        gameRow2Values={gameRow2Values}
        gameRow3Values={gameRow3Values}
        gameRow4Values={gameRow4Values}
        correctNums1={howManyCorrectNums1}
        correctNums2={howManyCorrectNums2}
        correctNums3={howManyCorrectNums3}
        correctNums4={howManyCorrectNums4}
      />
      {isFailure || isSuccess ? (
        <button>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={handleBtnClick} />
      )}
    </>
  );
}
