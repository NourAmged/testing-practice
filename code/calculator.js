function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        throw new Error("please enter a number");
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        throw new Error("please enter a number");
    return a - b;
}

function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        throw new Error("please enter a number");
    if (b === 0)
        throw new Error("You can`t divide by zero");

    return a / b;
}

function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        throw new Error("please enter a number");
    return a * b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};