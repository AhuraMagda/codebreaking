
interface GameBoardSingleRowProps {
  filledValues: number [] | [];
}

export default function GameBoardSingleRow( { filledValues }: GameBoardSingleRowProps ) {


  return (
    <div className="game-board__row">
      <div className="game-board__row__circle">{filledValues[0] || ""}</div>
      <div className="game-board__row__circle">{filledValues[1] || ""}</div>
      <div className="game-board__row__circle">{filledValues[2] || ""}</div>
      <div className="game-board__row__circle">{filledValues[3] || ""}</div>
      <div className="game-board__row__circle">{filledValues[4] || ""}</div>
    </div>
  );
}
