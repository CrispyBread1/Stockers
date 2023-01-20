const Data = require('./testPageData')



const stockCloseNumbers = Data.map((data) => {return data.data.close}) // tick
let percentageFromPreviouseDay = [] // tick
const probabilityKeyValue = {}
const xCoords = []
const yCoords = []
const xyCoords = {}
// const sortedPercentagefrompreviouseDay = percentageFromPreviouseDay.sort((a,b) => a-b) // tick
// const probabilityPoints = []



const percetnageFromPreviouseday = () => {
    for (close of stockCloseNumbers) {
        const index = 1
        if(!stockCloseNumbers[index]){return console.log('no numbers in array left boo')}
        const answer = ((close - stockCloseNumbers[index]) * 100) / stockCloseNumbers[index]
        percentageFromPreviouseDay.push(answer)
        index + 1 
    }
}

const sort = (numbers) => {
    const numberTimes100 = numbers.map((number) => number * 100000)
    numberTimes100.sort((a,b) => a-b)
    return percentageFromPreviouseDay = numberTimes100.map((number) => number / 100000)
}

const porbabilityCalculator = () => {
    let index = 1
    for (dayClose of percentageFromPreviouseDay) {
        const amountOfData = percentageFromPreviouseDay.length
        let probabilty = index / amountOfData
        probabilityKeyValue[dayClose] = probabilty
        xCoords.push(dayClose)
        yCoords.push(probabilty)
        index += 1
    }
}



percetnageFromPreviouseday()
sort(percentageFromPreviouseDay)
porbabilityCalculator()
console.log(xCoords, yCoords)

