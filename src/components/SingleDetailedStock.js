import React from "react";


const SingleDetailedStock = ({stockDetailProp}) => {


    console.log(stockDetailProp)


    return(
        <>
        <h1>This loads single stock details</h1>
        <StockProbability stockListProp={stockDetailProp}/>
        </>
    )
}



export default SingleDetailedStock