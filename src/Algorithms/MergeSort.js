
const MergeSortController = (unsortedArray) =>{
    //check if sorting is necessary
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }

    const changeArray = []; //array of animations 
    const auxArray = unsortedArray.slice(); //copy unsortedArray
    MergeHelper(unsortedArray, 0, unsortedArray.length - 1, auxArray, changeArray);
    
    return changeArray;
  }
  
const MergeHelper = (main, start, end, auxArray, changeArray) =>{
    
    // if no need to use helper
    if (start === end) {
        return;
    }

    const middle = Math.floor((start + end) / 2);
    MergeHelper(auxArray, start, middle, main, changeArray);
    MergeHelper(auxArray, middle + 1, end, main, changeArray);
    MergeSort(main, start, middle, end, auxArray, changeArray);
  }
  
const MergeSort = (main, start, middle, end, auxArray, changeArray) =>{
    let k = start, i = start, j = (middle + 1);
    while (i <= middle && j <= end) {
      
      //2 colour changes
      changeArray.push([i, j]);
      changeArray.push([i, j]);

      if (auxArray[i] <= auxArray[j]) {
        // overwrite index k with i
        changeArray.push([k, auxArray[i]]);
        main[k++] = auxArray[i++];
      } else {
        // overwrite index k with j
        changeArray.push([k, auxArray[j]]);
        main[k++] = auxArray[j++];
      }
    }
    while (i <= middle) {
      
      // 2 colour changes
      changeArray.push([i, i]);
      changeArray.push([i, i]);
      
      // overwrite index k with i
      changeArray.push([k, auxArray[i]]);
      main[k++] = auxArray[i++];
    }
    while (j <= end) {

      //2 colour changes
      changeArray.push([j, j]);
      changeArray.push([j, j]);

      // overwrite index k with j
      changeArray.push([k, auxArray[j]]);
      main[k++] = auxArray[j++];
    }
}

export default MergeSortController;