const analyzeArray = require('../code/analyzeArray');

describe("analyzeArray", () => {
    test("empty array", () => {
        expect(analyzeArray([])).toStrictEqual([]);
    });

    test("array of numbers", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        );
    });
});