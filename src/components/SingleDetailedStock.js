import React from "react";



const SingleDetailedStock = ({probabilityThatStockWillRiseOrFall, stockProp, lowestHighestClosing, returnToHome}) => {



    const returnToHomePage = () => {
        returnToHome()
    }

    // console.log(stockProp)
    
    return(
        <div className="StockDetails">
            <h2>Stock: {stockProp.name}</h2>
            {/* <h3>Closing Price: {stockProp.close}</h3> */}
            <h4>The probability of this falling from {stockProp} up to {lowestHighestClosing.Lowest} is: {probabilityThatStockWillRiseOrFall.Fall}%</h4>
            <h4>The probability of this rising from 0 up to {lowestHighestClosing.Highest} is: {probabilityThatStockWillRiseOrFall.Rise}%</h4>
            <button onClick={returnToHomePage}>Return to Homepage</button>
        </div>
    )
}



export default SingleDetailedStock