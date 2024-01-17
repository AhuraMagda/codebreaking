import GameBoardSingleRow from "./GameBoardSingleRow";
import { StyledGameBoard } from "../styles/StyledGameBoard";
import { GameBoardEmptyProps } from "./types/GameBoardEmptyTypes";

export default function GameBoardEmpty({ rows }: GameBoardEmptyProps) {
  return (
    <StyledGameBoard>
      <GameBoardSingleRow rows={rows} index={5} />
      <GameBoardSingleRow rows={rows} index={4} />
      <GameBoardSingleRow rows={rows} index={3} />
      <GameBoardSingleRow rows={rows} index={2} />
      <GameBoardSingleRow rows={rows} index={1} />
      <GameBoardSingleRow rows={rows} index={0} />
    </StyledGameBoard>
  );
}
