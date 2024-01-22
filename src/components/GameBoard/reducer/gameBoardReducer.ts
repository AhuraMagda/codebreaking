import { checkIfCorrectNum } from "../helpers/checkIfCorrectNum";
import { checkIfCorrectPlace } from "../helpers/checkIfCorrectPlace";
import { initialRowsState } from "../helpers/initialRowsState";
import { makeRandomNumArray } from "../helpers/makeRandomNumbers";
import { gameBoardReducerAction, gameBoardReducerState } from "../types/GameBoardReducerStateTypes";

export const gameBoardReducer = (state: gameBoardReducerState, action:gameBoardReducerAction) => {
  const checkIfSuccess = (checkedArr: number[]) => {
    console.log("checking for success...");
    if (checkedArr.toString() === state.solution.toString()) {
      return true;
    }
    return false;
  };

  const checkRow = (value: number) => {
    const newRows = [...state.rows];
    const newRow: number[] = [...newRows[state.rowIndex].values, value];
    let newRowsIndex = state.rowIndex;
    let isSuccess = state.isSuccess;
    let isFailure = state.isFailure;

    if (newRow.length === 4) {
      newRows[state.rowIndex] = {
        values: newRow,
        correctNums: checkIfCorrectNum(newRow, state.solution),
        correctPlaces: checkIfCorrectPlace(newRow, state.solution),
      };
    } else {
      newRows[state.rowIndex] = {
        ...newRows[state.rowIndex],
        values: newRow,
      };
    }

    if (state.rows[state.rowIndex].values.length === 3) {
      newRowsIndex = state.rowIndex + 1;
      isSuccess = checkIfSuccess(newRow);
      if (state.rows[state.rows.length - 1].values.length === 3) {
        isFailure = true;
      }
    }

    return {
      ...state,
      isSuccess,
      isFailure,
      rows: newRows,
      rowIndex: newRowsIndex,
      solutionValues:
        isSuccess || isFailure ? state.solution : state.solutionValues,
    };
  };

  const handleNewGame = () => {
    return {
      ...state,
      isFailure: false,
      isSuccess: false,
      rowIndex: 0,
      rows: initialRowsState,
      solution: makeRandomNumArray(),
      solutionValues: ["?", "?", "?", "?"],
    };
  };

  switch (action.type) {
    case "check_row":
      return checkRow(action.value);
    case "handle_new_game":
      return handleNewGame();
    case "first_render":
      return {
        ...state,
        solution: makeRandomNumArray(),
      };
  }
};
