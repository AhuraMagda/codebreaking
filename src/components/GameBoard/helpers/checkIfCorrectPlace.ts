export const checkIfCorrectPlace = (testedArr, solutionArr) => {
    return testedArr.filter((n, i) => n === solutionArr[i]).length;
}

// TODO
// test it