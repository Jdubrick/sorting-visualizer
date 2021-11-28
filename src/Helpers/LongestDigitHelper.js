
const LongestDigitHelper = (array) => {

    let longestDigit = 0;
    let curr_length = 0;
    for (let i = 0; i < array.length; i++) {

        curr_length = Math.ceil(Math.log10(array[i] + 1)); //find the length of a number ie. 1024 is length 4

        if (curr_length > longestDigit) {
            longestDigit = curr_length;
        }


    }
    return longestDigit
}

export default LongestDigitHelper;