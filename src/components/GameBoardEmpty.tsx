import GameBoardSingleRow from "./GameBoardSingleRow";

export default function GameBoardEmpty() {

    
  return (
    <div className="game-board">
        <GameBoardSingleRow />
        <GameBoardSingleRow />
        <GameBoardSingleRow />
        <GameBoardSingleRow />
        <GameBoardSingleRow />
        <GameBoardSingleRow />
        <GameBoardSingleRow />
    </div>
  );
}
