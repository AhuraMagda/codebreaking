import { useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";
import { checkIfCorrectNum } from "./helpers/checkIfCorrectNum";
import { checkIfCorrectPlace } from "./helpers/checkIfCorrectPlace";

// TODO
// clean this mess

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

  const [howManyCorrectPlaces1, setHowManyCorrectPlaces1] = useState(0);
  const [howManyCorrectPlaces2, setHowManyCorrectPlaces2] = useState(0);
  const [howManyCorrectPlaces3, setHowManyCorrectPlaces3] = useState(0);
  const [howManyCorrectPlaces4, setHowManyCorrectPlaces4] = useState(0);

  const checkIfSuccess = (checkedArr: number[], solution: number[]) => {
    if (checkedArr.toString() === solution.toString()) {
      setIsSuccess(true);
      return;
    } else if (gameRow4Values.length === 3) {
      setIsFailure(true);
    }
  };

  // TODO add ts types
  const checkRow = (row, setRow, value, setCorrectNum, setCorrectPlace) => {
    setRow((prevRow) => {
      const newRow = [...prevRow, value];
      checkIfSuccess(newRow, solution);
      if (row.length === 3) {
        setCorrectNum(checkIfCorrectNum(newRow, solution));
        setCorrectPlace(checkIfCorrectPlace(newRow, solution));
      }
      return newRow;
    });
  };

  const handleBtnClick = (value: number) => {
    if (gameRow1Values.length < 4) {
      checkRow(
        gameRow1Values,
        setGameRow1Values,
        value,
        setHowManyCorrectNums1,
        setHowManyCorrectPlaces1
      );
    } else if (gameRow2Values.length < 4) {
      checkRow(
        gameRow2Values,
        setGameRow2Values,
        value,
        setHowManyCorrectNums2,
        setHowManyCorrectPlaces2
      );
    } else if (gameRow3Values.length < 4) {
      checkRow(
        gameRow3Values,
        setGameRow3Values,
        value,
        setHowManyCorrectNums3,
        setHowManyCorrectPlaces3
      );
    } else if (gameRow4Values.length < 4) {
      checkRow(
        gameRow4Values,
        setGameRow4Values,
        value,
        setHowManyCorrectNums4,
        setHowManyCorrectPlaces4
      );
    }
  };

  return (
    <>
      {/* {howManyCorrectPlaces1} */}
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution filledValues={solution} />
      <GameBoardEmpty
        gameRowValues={{
          gameRow1Values,
          gameRow2Values,
          gameRow3Values,
          gameRow4Values,
        }}
        correctNums={{
          howManyCorrectNums1,
          howManyCorrectNums2,
          howManyCorrectNums3,
          howManyCorrectNums4,
        }}
        correctPlaces={{
          howManyCorrectPlaces1,
          howManyCorrectPlaces2,
          howManyCorrectPlaces3,
          howManyCorrectPlaces4,
        }}
      />
      {isFailure || isSuccess ? (
        <button>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={handleBtnClick} />
      )}
    </>
  );
}
