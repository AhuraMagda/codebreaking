export const checkIfCorrectNum = (checked: number[], solution: number[]) => {
  let count = 0;
  const solutionCopy = [...solution];
  checked.forEach((num) => {
    if (solutionCopy.includes(num)) {
      count++;
      const index = solutionCopy.indexOf(num);
      if (index > -1) {
        solutionCopy.splice(index, 1);
      }
    }
  });
  return count;
};
