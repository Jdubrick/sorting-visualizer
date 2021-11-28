
const FlattenArray = (mainArray, bucketsArray) => {

    let flattenedArray = [];

    for (let i = 0; i < bucketsArray.length; i++){

        for (let j = 0; j < bucketsArray[i].length; j++) {

            flattenedArray.push(bucketsArray[i][j]);

        }

    }



    return flattenedArray;
}

export default FlattenArray;