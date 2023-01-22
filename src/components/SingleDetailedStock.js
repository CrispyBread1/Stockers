import React from "react";



const SingleDetailedStock = ({probabilityThatStockWillRiseOrFall, stockProp, lowestHighestClosing, returnToHome}) => {


    const returnToHomePage = () => {
        returnToHome()
    }


    return(
        <>
            <h2>Stock: {stockProp.name}</h2>
            <h4>The probability of this falling up to {lowestHighestClosing.Lowest} is: {probabilityThatStockWillRiseOrFall.Fall}%</h4>
            <h4>The probability of this rising up to {lowestHighestClosing.Highest} is: {probabilityThatStockWillRiseOrFall.Rise}%</h4>
            <button onClick={returnToHomePage}>Return to Homepage</button>
        </>
    )
}



export default SingleDetailedStock