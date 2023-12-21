export const checkIfCorrectNum = (checkedArr: number[], solutionArr: number[]) => {
    
    const matchedNums = new Set<number>();
    checkedArr.forEach(num => {
      if (solutionArr.includes(num)) {
        matchedNums.add(num);
      }
    })
    return matchedNums.size;
  }