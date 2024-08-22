const capitalize = require('../code/capitalize');

describe("Capitalize", () => {

    test("random string ", () => {
        expect(capitalize("cat")).toBe("Cat");
    });

    test("Is Undefined", () => {
        expect(capitalize()).toBe("");
    });
    
    test("Is Null", () => {
        expect(capitalize(null)).toBe("");
    });
});