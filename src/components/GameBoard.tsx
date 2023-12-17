import GameBoardButtons from "./GameBoardButtons";
import GameBoardEmpty from "./GameBoardEmpty";
import GameBoardSolution from "./GameBoardSolution";

export default function GameBoard() {
  return (
    <>
      <GameBoardSolution />
      <GameBoardEmpty />
      <GameBoardButtons />
    </>
  );
}
