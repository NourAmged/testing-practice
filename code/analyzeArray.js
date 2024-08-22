function analyzeArray(array) {
    if (array.length === 0)
        return [];

    let length = array.length;
    let min = max = array[0];
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += array[i];
        if (min > array[i])
            min = array[i];

        if (max < array[i])
            max = array[i];

    }

    const average = sum / length;

    return {
        average,
        min,
        max,
        length
    };

}

module.exports = analyzeArray;