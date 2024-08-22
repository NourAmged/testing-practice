const { add, subtract, multiply, divide } = require('../code/calculator');

describe("calculator", () => {
    describe("addition", () => {
        test("normal numbers", () => {
            expect(add(1, 2)).toBe(3);
        });

        test("floating point numbers", () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test("negative numbers", () => {
            expect(add(-3, -2)).toBe(-5);
        });

        test("non number input", () => {
            expect(() => add("c", "d")).toThrow();
        });
    });


    describe("subtraction", () => {
        test("normal numbers", () => {
            expect(subtract(1, 2)).toBe(-1);
        });

        test("floating point numbers", () => {
            expect(subtract(0.1, 0.2)).toBeCloseTo(-0.1);
        });

        test("negative numbers", () => {
            expect(subtract(-3, -2)).toBe(-1);
        });

        test("non number input", () => {
            expect(() => subtract("c", "d")).toThrow();
        });
    });


    describe("multiplication", () => {
        test("normal numbers", () => {
            expect(multiply(3, 2)).toBe(6);
        });

        test("floating point numbers", () => {
            expect(multiply(0.2, 0.2)).toBeCloseTo(0.04);
        });

        test("negative numbers", () => {
            expect(multiply(-3, -3)).toBe(9);
        });

        test("non number input", () => {
            expect(() => multiply("c", "d")).toThrow();
        });
    });


    describe("division", () => {
        test("normal numbers", () => {
            expect(divide(3, 2)).toBeCloseTo(1.5);
        });

        test("floating point numbers", () => {
            expect(divide(0.2, 0.3)).toBeCloseTo(0.67);
        });

        test("negative numbers", () => {
            expect(divide(-3, -3)).toBe(1);
        });

        test("division by zero", () =>{
            expect(() => divide(1, 0)).toThrow();
        });

        test("non number input", () => {
            expect(() => divide("c", "d")).toThrow();
        });
    });

});