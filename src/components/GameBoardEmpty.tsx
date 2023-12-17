import GameBoardSingleRow from "./GameBoardSingleRow";

interface GameBoardEmptyProps {
  filledValues: number [] | [];
}

export default function GameBoardEmpty({ filledValues }: GameBoardEmptyProps) {

    
  return (
    <div className="game-board">
        <GameBoardSingleRow filledValues={filledValues}/>
    </div>
  );
}
