const Data = require('./testPageData')


const stockCloseNumbers = Data.map((data) => {return data.data.close}) // tick
let percentageFromPreviouseDay = [] // tick
// const sortedPercentagefrompreviouseDay = percentageFromPreviouseDay.sort((a,b) => a-b) // tick
const index = 1
const probabilityPoints = []


const percetnageFromPreviouseday = () => {
    for (close of stockCloseNumbers) {
        const index = 1
        if(!stockCloseNumbers[index]){return console.log('no numbers in array left boo')}
        const answer = ((close - stockCloseNumbers[index]) * 100) / stockCloseNumbers[index]
        percentageFromPreviouseDay.push(answer)
        // console.log(percentageFromPreviouseDay)
        index + 1 
    }
}

const sort = (numbers) => {
    const numberTimes100 = numbers.map((number) => number * 100000)
    numberTimes100.sort((a,b) => a-b)
    // console.log(numberTimes100)
    return percentageFromPreviouseDay = numberTimes100.map((number) => number / 100000)
    // console.log(numberTimes100.sort())
}

percetnageFromPreviouseday()
sort(percentageFromPreviouseDay)
console.log(percentageFromPreviouseDay)
// console.log(sortedPercentagefrompreviouseDay)


const porbabilityCalculator = () => {
    for (dayClose of sortedPercentagefrompreviouseDay) {
        const probabilty = index / sortedPercentagefrompreviouseDay.length()
        probabilityKeyValue = {}
        probabilityKeyValue[dayclose, probabilty]
            probabilityPoints.push(probabilityKeyValue)

        index += 1
            
    }
}
