// import { checkIfCorrectNum } from "./checkIfCorrectNum.ts";

//TODO
//test is OK, but when trying to import or use TS, error appears
//fix import problem
//fix problems with using TS

const checkIfCorrectNum = (checkedArr, solutionArr) => {
    const matchedNums = new Set();
    checkedArr.forEach(num => {
      if (solutionArr.includes(num)) {
        matchedNums.add(num);
      }
    })
    return matchedNums.size;
  }

describe("checkIfCorrectNum", ()=> {
    test("returns 4 when all numbers are same", () => {
        // Arrange
        const checked = [1,2,3,4];
        const solution = [2,4,1,3];
        // Act
        const result = checkIfCorrectNum(checked, solution)
        // Assert
        expect(result).toBe(4)
    })
    test("returns 1 when only 1 time num is in solution", () => {
        // Arrange
        const checked = [1,1,1,1];
        const solution = [2,4,1,3];
        // Act
        const result = checkIfCorrectNum(checked, solution)
        // Assert
        expect(result).toBe(1)
    })
    test("returns 1 when only 1 time num is in chcked arr", () => {
        // Arrange
        const checked = [2,2,1,2];
        const solution = [1,1,1,1];
        // Act
        const result = checkIfCorrectNum(checked, solution)
        // Assert
        expect(result).toBe(1)
    })
    test("returns 0 with empty arr", () => {
        // Arrange
        const checked = [];
        const solution = [1,2,3,4];
        // Act
        const result = checkIfCorrectNum(checked, solution)
        // Assert
        expect(result).toBe(0)
    })
})