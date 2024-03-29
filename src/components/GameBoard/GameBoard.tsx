import { useEffect, useReducer } from "react";
import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";
import { gameBoardReducer } from "./reducer/gameBoardReducer";
import { initialRowsState } from "./helpers/initialRowsState";

export default function GameBoard() {
  const [{ isSuccess, isFailure, solutionValues, rows }, dispatch] = useReducer(
    gameBoardReducer,
    {
      isSuccess: false,
      isFailure: false,
      rows: initialRowsState,
      solution: [],
      solutionValues: ["?", "?", "?", "?"],
      rowIndex: 0,
    }
  );

  useEffect(() => {
    dispatch({ type: "first_render" });
  }, []);

  const handleNumberPick = (value: number) => {
    dispatch({ type: "check_row", value });
  };

  const handleNewGame = () => {
    dispatch({ type: "handle_new_game" });
  };

  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution values={solutionValues} />
      <GameBoardEmpty rows={rows} />
      {isFailure || isSuccess ? (
        <button onClick={handleNewGame}>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={handleNumberPick} />
      )}
    </>
  );
}
