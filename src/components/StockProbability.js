import React from "react";
import SingleDetailedStock from "./SingleDetailedStock";
// import { Chart } from "chart.js";


const StockProbability = ({stockDetailProp, stockProp, testData, returnToHome}) => {

        
     // tick
    const stockData = stockDetailProp
    
    let percentageFromPreviouseDay = [] // tick
    const probabilityKeyValue = {}
    const xCoords = []
    const yCoords = []
    const dataOfNumbersMinusPlus = {minus: 0, plus: 0}
    const probabilityThatStockWillRiseOrFall = {Fall: 0, Rise: 0}
    const lowestHighestClosing = {Lowest: 0, Highest:0}

    


    const percetnageFromPreviouseday = () => {
        const stockDetailArray = stockData.map((data) => {return data.data.close})
        // console.log(stockDetailArray)
        for (const close of stockDetailArray) {
            let index = 1
            if(!stockDetailArray[index]){return console.log('no numbers in array left boo')}
            const answer = ((close - stockDetailArray[index]) * 100) / stockDetailArray[index]
            percentageFromPreviouseDay.push(answer)
            index += 1 
        }
    }

    const sortIntoLowestHighest = (numbers) => {
        const stockCloseDifference = []
        let index = 1
        const stockClosing = numbers.map((number) => {return number.data.close})
        for (const closing of stockClosing){
            stockCloseDifference.push(stockClosing[index] - closing)
            index += 1
        } 
        stockCloseDifference.sort((a,b) => a-b)
        lowestHighestClosing.Lowest = stockCloseDifference[0]
        lowestHighestClosing.Highest = stockCloseDifference[stockCloseDifference.length -2]
        // console.log(stockCloseDifference)
        // console.log(lowestHighestClosing)
        
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
        percetnageFromPreviouseday()
        porbabilityCalculator()
        sortIntoPorbabilityOfOutcome(percentageFromPreviouseDay)
        getProbabilityThatStockWillRiseOrFall()
        sortIntoLowestHighest(stockData)
        return probabilityThatStockWillRiseOrFall

        // setTimeout(() => {}, 100000)
        // sort(percentageFromPreviouseDay)
        // return <SingleDetailedStock probabilityThatStockWillRiseOrFall={probabilityThatStockWillRiseOrFall}/>
        // console.log(probabilityThatStockWillRiseOrFall)
    }
    
    
    // console.log(probabilityThatStockWillRiseOrFall)
    getProbability()
    // console.log(lowestHighestClosing)
    // console.log(probabilityThatStockWillRiseOrFall)
    // console.log(dataOfNumbersMinusPlus)
    // console.log(percentageFromPreviouseDay)
    // console.log(xCoords, yCoords)
    return(
        <>
        {/* <h1 >Hell YEA THIS WORKS WOOOOO</h1> */}
        <h1>Stock's Future!!</h1>
        <SingleDetailedStock 
        probabilityThatStockWillRiseOrFall = {probabilityThatStockWillRiseOrFall} 
        stockProp = {stockProp}
        lowestHighestClosing = {lowestHighestClosing}
        returnToHome = {returnToHome}
        />
        {/* <p>The probability of (this stock) falling to (this level) is: {probabilityThatStockWillRiseOrFall.Fall}%</p> */}
        {/* <canvas id="myChart" width='100%' max-width= '700px'></canvas> */}
        
        </>
    )


}



export default StockProbability