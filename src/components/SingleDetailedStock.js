import React from "react";
import StockProbability from "./StockProbability";


const SingleDetailedStock = ({probabilityThatStockWillRiseOrFall}) => {


    


    return(
        <>
            <h1>The probability of (this stock) falling to (this level) is: {probabilityThatStockWillRiseOrFall.Fall}%</h1>
        </>
    )
}



export default SingleDetailedStock