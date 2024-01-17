export const checkIfCorrectPlace = (testedArr: number[], solutionArr: number[]) => {
    return testedArr.filter((n, i) => n === solutionArr[i]).length;
}

// TODO
// test it