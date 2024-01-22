import { checkIfCorrectNum } from "../helpers/checkIfCorrectNum";
import { checkIfCorrectPlace } from "../helpers/checkIfCorrectPlace";
import { makeRandomNumArray } from "../helpers/makeRandomNumbers";

const initialRowsState = Array.from({ length: 10 }, () => ({
  values: [],
  correctNums: 0,
  correctPlaces: 0,
}));

export const gameBoardReducer = (state, action) => {

  const checkIfSuccess = (checkedArr: number[]) => {
    console.log("checking for success...")
    if (checkedArr.toString() === state.solution.toString()) {
      return true
    }
    return false;
  }

  const checkRow = (value: number) => {
    const newRows = [...state.rows];
    const newRow = [...newRows[state.rowIndex].values, value];
    let newRowsIndex = state.rowIndex;
    let isSuccess = state.isSuccess;
    let isFailure = state.isFailure;
    // ustawia te po boku
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
      isSuccess = checkIfSuccess(newRow)
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
      solutionValues: isSuccess || isFailure ? state.solution : state.solutionValues
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
