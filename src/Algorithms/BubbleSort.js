

const BubbleSort = (ogArray) => {

    let changeArray = []
    let tmp = null

    for (let i = 0; i < ogArray.length - 1; i++) {
        

        for (let j = 0; j < ogArray.length - i - 1; j++) {

            changeArray.push([j, j+1, false])
            changeArray.push([j, j+1, false])
            
            if (ogArray[j] > ogArray[j+1]) {
                changeArray.push([j, j+1, true, ogArray[j], ogArray[j+1]])
                tmp = ogArray[j]
                ogArray[j] = ogArray[j + 1]
                ogArray[j + 1] = tmp
                
            }
            else {
                changeArray.push([j, j+1, false])
            }
  
        }
 
    }

    return changeArray

}

export default BubbleSort