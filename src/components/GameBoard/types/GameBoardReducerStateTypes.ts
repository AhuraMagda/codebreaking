export type gameBoardReducerState = {
  isSuccess: boolean;
  isFailure: boolean;
  rows: [
    values: [] | number[],
    correctNums: number,
    correctPlaces: number
  ];
  solution: number[];
  solutionValues: string[] | number[];
  rowIndex: number;
};

export type gameBoardReducerAction = {
    type: "first_render" | "check_row" | "handle_new_game";
    value?: number;
}

export type gameBoardReducerProps = {
    state: gameBoardReducerState;
    action?: gameBoardReducerAction;
} 