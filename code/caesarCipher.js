function caesarCipher(string, shift) {
    if (!string) return '';

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();

        if (alphabet.includes(lowerChar)) {
            const originalIndex = alphabet.indexOf(lowerChar);
            let newIndex = (originalIndex + shift) % 26;

            if (newIndex < 0) {
                newIndex += 26;
            }

            const newChar = alphabet[newIndex];
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            result += char; 
        }
    }

    return result;
}

module.exports = caesarCipher;