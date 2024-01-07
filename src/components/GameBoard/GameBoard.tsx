import { useEffect, useState } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";
import { checkIfCorrectNum } from "./helpers/checkIfCorrectNum";
import { checkIfCorrectPlace } from "./helpers/checkIfCorrectPlace";
import { GameBoardRowsState } from "./types/GameBoardTypes";
import { makeRandomNumArray } from "./helpers/makeRandomNumbers";

export default function GameBoard() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const initialRowsState = Array.from({ length: 6 }, () => ({
    values: [],
    correctNums: 0,
    correctPlaces: 0,
  }));

  const [rows, setRows] = useState<GameBoardRowsState[]>(initialRowsState);

  const [solution, setSolution] = useState<number[]>([]);

  const [solutionValues, setSolutionValues] = useState<number[] | string[]>(["?", "?", "?", "?"]) 

  useEffect(() => {
    setSolution(makeRandomNumArray);
    console.log("this is useeffect")
  }, []);

  const [rowIndex, setRowIndex] = useState(0);

  const checkIfSuccess = (checkedArr: number[], solution: number[]) => {
    if (checkedArr.toString() === solution.toString()) {
      setIsSuccess(true);
      setSolutionValues(solution)
      return;
    } else if (rows[rows.length - 1].values.length === 3) {
      setIsFailure(true);
      setSolutionValues(solution)
    }
  };

  const checkRow = (value: number, rowIndex: number) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      const newRow = [...newRows[rowIndex].values, value];

      if (newRow.length === 4) {
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
    if (rows[rowIndex].values.length === 3) {
      setRowIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleNewGame = () => {
    setIsFailure(false);
    setIsSuccess(false);
    setRowIndex(0);
    setRows(initialRowsState);
    setSolution(makeRandomNumArray());
    setSolutionValues(["?", "?", "?", "?"])
    console.log("this is handle new game")
  };



  console.log(solution);
  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution values={solutionValues}/>
      <GameBoardEmpty rows={rows} />
      {isFailure || isSuccess ? (
        <button onClick={handleNewGame}>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={checkRow} rowIndex={rowIndex} />
      )}
    </>
  );
}
