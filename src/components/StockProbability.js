import React from "react";
import C


const StockProbability = ({stockDetailProp, testData}) => {

        
    const stockCloseNumbers = testData.map((data) => {return data.data.close}) // tick
    let percentageFromPreviouseDay = [] // tick
    const probabilityKeyValue = {}
    const xCoords = []
    const yCoords = []
    


    const percetnageFromPreviouseday = () => {
        for (const close of stockCloseNumbers) {
            let index = 1
            if(!stockCloseNumbers[index]){return console.log('no numbers in array left boo')}
            const answer = ((close - stockCloseNumbers[index]) * 100) / stockCloseNumbers[index]
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

    const getProbability = () => {
        percetnageFromPreviouseday()
        sort(percentageFromPreviouseDay)
        porbabilityCalculator()
        // console.log(xCoords, yCoords)
        
        const dataChart = new Chart("myChart", {
            type: "line",
            data: {
            labels: xCoords,
            datasets: [{
                backgroundColor: "rgba(0,0,0,1.0)",
                borderColor: "rgba(0,0,0,0.1)",
                data: yCoords
            }]
            },
            options:{}
        });
    }


    return(
        <>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
        <h1 onClick={getProbability}>Hell YEA THIS WORKS WOOOOO</h1>
        <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
        </>
    )


}



export default StockProbability