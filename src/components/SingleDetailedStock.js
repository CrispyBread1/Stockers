import React from "react";
import StockProbability from "./StockProbability";


const SingleDetailedStock = ({stockDetailProp, testData}) => {


    // console.log(stockDetailProp)


    return(
        <>
        {/* <h1>This loads single stock details</h1> */}
        <StockProbability stockListProp={stockDetailProp} testData={testData}/>
        </>
    )
}



export default SingleDetailedStock