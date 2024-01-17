








  return (
    <>
      {isSuccess && <h2>CONGRATS</h2>}
      {isFailure && <h2>BOOO!</h2>}
      <GameBoardSolution values={solutionValues} />
      <GameBoardEmpty rows={rows} />
      {isFailure || isSuccess ? (
        <button onClick={handleNewGame}>NEW GAME</button>
      ) : (
        <GameBoardButtons handleBtnClick={checkRow} rowIndex={rowIndex} />
      )}
    </>
  );