
import {React, useState, useEffect} from "react"
import './SortingVisualizer.css'
import BubbleSort from '../Algorithms/BubbleSort'
import InsertionSort from '../Algorithms/InsertionSort'
import RadixSort from '../Algorithms/RadixSort';
import MergeSortController from '../Algorithms/MergeSort'


const SortingVisualizer = (props) => {

    const [array, setArray] = useState([]);
    const [mounted, setMounted] = useState(false)

    useEffect( () => {
        generateArray()
    }, [mounted])


    

    const generateArray = () => {

        let generatedArray = [];
        for (let i = 0; i < 125; i++) {
            generatedArray.push(Math.floor(Math.random() * (650 - 15 + 1) + 15));
        }
        setArray(generatedArray);
        return;
    }

    const getRadixSort = () => {

        let aniArray = RadixSort(array);
        const arrayElements = document.getElementsByClassName('array-element')

        for (let i = 0; i < aniArray.length; i++) {

            const elementIndx = aniArray[i][0];
            const elementStyle = arrayElements[elementIndx].style;
            const colour = i % 3 === 0 ? 'red' : 'rgb(77, 77, 206)';

            if (i % 3 === 2) {
                setTimeout(() => {
                    if (aniArray[i][2] === true) {
                        elementStyle.height = `${aniArray[i][1]}px`
                    }
                }, i*3)
            }
            else {
                setTimeout(() => {
                    elementStyle.backgroundColor = colour;
                }, i*3) 
            }

        }
        return;
    }
    const getMergeSort = () => {
        
        let aniArray = MergeSortController(array);
        const arrayElements = document.getElementsByClassName('array-element')

        for (let i = 0; i < aniArray.length; i++) {
            
            const colour = i % 3 === 0 ? 'red' : 'rgb(77, 77, 206)';

            if (i % 3 !== 2) {

                const [elementOne, elementTwo] = aniArray[i];
                const elementOneStyle = arrayElements[elementOne].style;
                const elementTwoStyle = arrayElements[elementTwo].style;

              setTimeout(() => {
                elementOneStyle.backgroundColor = colour;
                elementTwoStyle.backgroundColor = colour;
              }, i*3);
            }
            else {
                setTimeout(() => {
                    const [elementOne, heightOne] = aniArray[i];
                    const elementOneStyle = arrayElements[elementOne].style;
                    elementOneStyle.height = `${heightOne}px`;
                  }, i*3);
            }
        }
        return;
    }
    const getBubbleSort = () => {
        
        let aniArray = BubbleSort(array);
        const arrayElements = document.getElementsByClassName('array-element')
        
        for (let i = 0; i < aniArray.length; i++) {

            const elementOneIndx = aniArray[i][0]
            const elementTwoIndx = aniArray[i][1]
            const elementOneStyle = arrayElements[elementOneIndx].style
            const elementTwoStyle = arrayElements[elementTwoIndx].style
            const colour = i % 3 === 0 ? 'red' : 'rgb(77, 77, 206)';
            if (i % 3 === 2) {
                setTimeout(() => {
                    if (aniArray[i][2] === true) {
                        elementOneStyle.height = `${aniArray[i][4]}px`
                        elementTwoStyle.height = `${aniArray[i][3]}px`
                    }
                }, i*3)
  
            }
            else {
                setTimeout(() => {
                    elementOneStyle.backgroundColor = colour;
                    elementTwoStyle.backgroundColor = colour;
                }, i*3) 
            }
        }

        return;
    }
    const getInsertionSort = () => {

        let aniArray = InsertionSort(array);
        const arrayElements = document.getElementsByClassName('array-element')
        for (let i = 0; i < aniArray.length; i++) {

            const elementOneIndx = aniArray[i][0]
            const elementTwoIndx = aniArray[i][1]
            const elementOneStyle = arrayElements[elementOneIndx].style
            const elementTwoStyle = arrayElements[elementTwoIndx].style
            const colour = i % 3 === 0 ? 'red' : 'rgb(77, 77, 206)'; //if false then colour change
            if (aniArray[i][2] === true) { //if true then value change
                setTimeout(() => {
                        elementOneStyle.height = `${aniArray[i][4]}px`
                        if (aniArray[i][5] === false) {
                            elementTwoStyle.height = `${aniArray[i][3]}px`
                        }
                        
                    
                }, i*3)
  
            }

            if (aniArray[i][5] === true) {
                setTimeout(() => {
                    elementOneStyle.backgroundColor = colour;
                    elementTwoStyle.backgroundColor = colour;
                }, i*3)
                
            }
        }
        return;
    }


    return (
        <> 
        <button className="button-element" onClick={() => generateArray()}>
            Generate New Array
        </button>
        <button className="button-element" onClick={() => getRadixSort()}>
            Radix Sort
        </button>
        <button className="button-element" onClick={() => getMergeSort()}>
            Merge Sort
        </button>
        <button className="button-element" onClick={() => getBubbleSort()}>
            Bubble Sort
        </button>
        <button className="button-element" onClick={() => getInsertionSort()}>
            Insertion Sort
        </button>
        
        <div className="element-container">
            {array.map((value, indx) => {
                    return (
                    <div 
                        className ="array-element" 
                        key ={indx} 
                        style={{height: `${value}px`}}></div>
                    ) 
                })}
        </div>
        </>
    );
 
}

export default SortingVisualizer;
