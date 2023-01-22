import React from "react";
import SingleDetailedStock from "./SingleDetailedStock";
// import { Chart } from "chart.js";


const StockProbability = ({stockDetailProp, testData}) => {

        
     // tick
    
    
    let percentageFromPreviouseDay = [] // tick
    const probabilityKeyValue = {}
    const xCoords = []
    const yCoords = []
    const dataOfNumbersMinusPlus = {minus: 0, plus: 0}
    const probabilityThatStockWillRiseOrFall = {Fall: 0, Rise: 0}

    


    const percetnageFromPreviouseday = () => {
        const stockDetailArray = testData.map((data) => {return data.data.close})
        console.log(stockDetailArray)
        for (const close of stockDetailArray) {
            let index = 1
            if(!stockDetailArray[index]){return console.log('no numbers in array left boo')}
            const answer = ((close - stockDetailArray[index]) * 100) / stockDetailArray[index]
            percentageFromPreviouseDay.push(answer)
            index += 1 
        }
    }

    const sort = (numbers) => {
        const numberTimes100 = numbers.map((number) => number * 100000)
        numberTimes100.sort((a,b) => a-b)
        return percentageFromPreviouseDay = numberTimes100.map((number) => number / 100000)
    }

    const porbabilityCalculator = () => {
        let index = 1
        for (const dayClose of percentageFromPreviouseDay) {
            const amountOfData = percentageFromPreviouseDay.length
            let probabilty = index / amountOfData
            probabilityKeyValue[dayClose] = probabilty
            xCoords.push(dayClose)
            yCoords.push(probabilty)
            index += 1
        }
    }

    const sortIntoPorbabilityOfOutcome = (numbers) => {
        const numberTimes100 = numbers.map((number) => number * 100000)
        numberTimes100.sort((a,b) => a-b)
        for(let number1000 of numberTimes100) {
            if(number1000 <= 0) {dataOfNumbersMinusPlus.minus += 1
                }else {dataOfNumbersMinusPlus.plus += 1}
        }
        return dataOfNumbersMinusPlus
        // console.log(overallProbability)
    }

    const getProbabilityThatStockWillRiseOrFall = () => {
        probabilityThatStockWillRiseOrFall.Fall = (dataOfNumbersMinusPlus.minus / percentageFromPreviouseDay.length) * 100
        probabilityThatStockWillRiseOrFall.Rise = (dataOfNumbersMinusPlus.plus / percentageFromPreviouseDay.length) * 100
        return probabilityThatStockWillRiseOrFall

    }

    const getProbability = () => {
        // setTimeout(() => {}, 100000)
        percetnageFromPreviouseday()
        // sort(percentageFromPreviouseDay)
        porbabilityCalculator()
        sortIntoPorbabilityOfOutcome(percentageFromPreviouseDay)
        getProbabilityThatStockWillRiseOrFall()
        // return <SingleDetailedStock probabilityThatStockWillRiseOrFall={probabilityThatStockWillRiseOrFall}/>
        // console.log(probabilityThatStockWillRiseOrFall)
    }
    
    
    // console.log(probabilityThatStockWillRiseOrFall)
    getProbability()

    // console.log(xCoords, yCoords)
    return(
        <>
        <h1 >Hell YEA THIS WORKS WOOOOO</h1>
        {/* {getProbability} */}
        <p>The probability of (this stock) falling to (this level) is: {probabilityThatStockWillRiseOrFall.Fall}%</p>
        {/* <canvas id="myChart" width='100%' max-width= '700px'></canvas> */}
        
        </>
    )


}



export default StockProbability