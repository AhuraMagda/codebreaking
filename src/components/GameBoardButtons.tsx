interface GameBoardButtonsProps {
    handleBtnClick: (arg: number) => void;
  }

export default function GameBoardButtons({ handleBtnClick }: GameBoardButtonsProps) {
  return (
    <div className="game-board__row">
      <button
        className="game-board__row__circle game-board__row__circle__btn"
        onClick={() => handleBtnClick(1)}
      >
        1
      </button>
      <button
        className="game-board__row__circle game-board__row__circle__btn"
        onClick={() => handleBtnClick(2)}
      >
        2
      </button>
      <button 
      className="game-board__row__circle game-board__row__circle__btn"
      onClick={() => handleBtnClick(3)}
      >
        3
      </button>
      <button 
      className="game-board__row__circle game-board__row__circle__btn"
      onClick={() => handleBtnClick(4)}
      >
        4
      </button>
      <button 
      className="game-board__row__circle game-board__row__circle__btn"
      onClick={() => handleBtnClick(5)}
      >
        5
      </button>
    </div>
  );
}
