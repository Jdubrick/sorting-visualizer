
const InsertionSort = (unsortedArray) => {

    let changeArray = [];
    let key = null;
    let j = null;

	for (let i = 1; i < unsortedArray.length; i++) {
		key = unsortedArray[i];
		j = i - 1;

        // changeArray.push([j, j+1, false, false, false, true]); //change colour 
        // changeArray.push([j, j+1, false, false, false, true]); //change colour
        // changeArray.push([i, i, true, key, key, true]); //dud height change fix this pls

        while (j >= 0 && unsortedArray[j] > key){
            
            //these colours are the ones to the left of i that we want to shift right until placement
            changeArray.push([j, j+1, false, false, false, true]); //shift colour change 1
            changeArray.push([j, j+1, false, false, false, true]); //shift colour change 2
            changeArray.push([j, j+1, true, unsortedArray[j], unsortedArray[j+1], false]); //shift value change

			unsortedArray[j + 1] = unsortedArray[j];
			j--;
		}
        changeArray.push([j + 1, i, false, false, false, true]); //change colour 1
        changeArray.push([j + 1, i, false, false, false, true]); //change colour 2
        changeArray.push([j+1, i, true, unsortedArray[j+1], key, true]); //insertion value change
		unsortedArray[j + 1] = key;
	}

    
    return changeArray;
}

export default InsertionSort;