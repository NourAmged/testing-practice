const reverseString = require('../code/reverseString');

describe("reverseString", () => {

    test("random string", () => {
        expect(reverseString("cat")).toBe("tac");
    });

    test("Is Undefined", () => {
        expect(reverseString()).toBe("");
    });

    test("Is Null", () => {
        expect(reverseString(null)).toBe("");
    });

    test("Random sentence", () => {
        expect(reverseString("lazy fox")).toBe("xof yzal");
    });
});