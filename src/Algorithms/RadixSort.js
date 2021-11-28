import LongestDigitHelper from '../Helpers/LongestDigitHelper'
import FlattenArray from '../Helpers/FlattenArray';

const RadixSort = (unsortedArray) => {

    let workingArray = unsortedArray;
    let changeArray = []; //array containing animations
    let current_power = 0; //power for digit placement
    let longest_digit = LongestDigitHelper(unsortedArray); //how many loops we must go through
    let buckets = [[], [], [], [], [], [], [], [], [], []];
    let goto_bucket = 0;
    let tester = [];
    let flattenedArray = []

    for (let i = 0; i < longest_digit; i++) {

        for (let j = 0; j < workingArray.length; j++) {

            goto_bucket = Math.floor(workingArray[j] / Math.pow(10, current_power)) % 10; //grab the digit at the n-th place and get index
            buckets[goto_bucket].push(workingArray[j]);
        }

        
        
        let indx = 0;
        flattenedArray.splice(0, flattenedArray.length);
        for (let i = 0; i < buckets.length; i++){

            
            for (let j = 0; j < buckets[i].length; j++) {
    
                changeArray.push([indx, buckets[i][j], false]) //element indx of height change, value to change to, false for no val change just colour
                changeArray.push([indx, buckets[i][j], false])
                changeArray.push([indx, buckets[i][j], true])

                flattenedArray.push(buckets[i][j]);
                indx++;
            }
    
        }

        workingArray = flattenedArray;
        buckets.splice(0, buckets.length); //clear buckets 2d array
        buckets = [[], [], [], [], [], [], [], [], [], []];
        current_power += 1;
    }

    console.log(flattenedArray)
    return changeArray;
}

export default RadixSort;