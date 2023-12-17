import GameBoardSingleRow from "./GameBoardSingleRow";

export default function GameBoardEmpty({ filledValues }) {

    
  return (
    <div className="game-board">
        <GameBoardSingleRow filledValues={filledValues}/>
    </div>
  );
}
