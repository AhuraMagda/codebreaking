import { useEffect, useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";
import { checkIfCorrectNum } from "./helpers/checkIfCorrectNum";
import { checkIfCorrectPlace } from "./helpers/checkIfCorrectPlace";

type RowsState = {
  values: number[];
  correctNums?: number;
  correctPlaces?: number;
};

export default function GameBoard() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const initialRowsState = Array.from({ length: 4 }, () => ({
    values: [],
    correctNums: 0,
    correctPlaces: 0,
  }))

  const [rows, setRows] = useState<RowsState[]>(initialRowsState);

  const [solution, setSolution] = useState<number[]>([])

  const makeNewSolution = () => {
    setSolution(Array.from({ length: 4 }, () => Math.ceil(Math.random() * 5)))
  }

  useEffect(()=> {
    makeNewSolution();
  }, [])

  const ROW_LENGTH = 4;

  const [rowIndex, setRowIndex] = useState(0);

  const checkIfSuccess = (checkedArr: number[], solution: number[]) => {
    if (checkedArr.toString() === solution.toString()) {
      setIsSuccess(true);
      return;
    } else if (rows[rows.length - 1].values.length === ROW_LENGTH - 1) {
      setIsFailure(true);
    }
  };

  const checkRow = (value: number, rowIndex: number) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      const newRow = [...newRows[rowIndex].values, value];

      if (newRow.length === ROW_LENGTH) {
        checkIfSuccess(newRow, solution);
        newRows[rowIndex] = {
          values: newRow,
          correctNums: checkIfCorrectNum(newRow, solution),
          correctPlaces: checkIfCorrectPlace(newRow, solution),
        };
      } else {
        newRows[rowIndex] = {
          ...newRows[rowIndex],
          values: newRow,
        };
      }
      return newRows;
    });
    if (rows[rowIndex].values.length === ROW_LENGTH - 1) {
      setRowIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleNewGame = () => {
    setIsFailure(false);
    setIsSuccess(false);
    setRowIndex(0);
    setRows(initialRowsState);
    makeNewSolution();
  };

  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution filledValues={solution} />
      <GameBoardEmpty rows={rows} />
      {isFailure || isSuccess ? (
        <button onClick={handleNewGame}>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={checkRow} rowIndex={rowIndex} />
      )}
    </>
  );
}
