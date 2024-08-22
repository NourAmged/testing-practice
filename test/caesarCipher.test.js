const caesarCipher = require('../code/caesarCipher');

describe("caesarCipher", () => {
    test("undefined input", () => {
        expect(caesarCipher()).toBe('');
    });

    test('edge case', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('upper letter', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});