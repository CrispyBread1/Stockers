import React from "react";



const StockProbability = ({stockDetailProp}) => {

    const stockCloseNumbers = []
    const percentageFromPreviouseDay = []
    const sortedPercentagefrompreviouseDay = percentageFromPreviouseDay.sort()
    const index = 1
    const probabilityPoints = []

    for (dayClose of sortedPercentagefrompreviouseDay) {
        const probabilty = index / sortedPercentagefrompreviouseDay.length()
        probabilityKeyValue = {}
        probabilityKeyValue[dayclose, probabilty]
        probabilityPoints.push(probabilityKeyValue)

        index += 1
        
    }


    return(
        <h1>Hell YEA THIS WORKS WOOOOO</h1>
    )


}



export default StockProbability