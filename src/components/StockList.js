import React from "react";
import Stock from "./Stock";


const StockList = ({stockListProp, changeURL}) => {
    
    // console.log(stockListProp)

    // const stockArray = stockListProp.data

    // console.log(stockArray)

    const listOfStocks = stockListProp.map((stock, index) => {
        
        return(
            <Stock stock={stock} key={index} changeURL={changeURL}/>
        )
    })
    
    return(
        <ol>
            <h2>Stock List</h2>
            {listOfStocks}
        </ol>
    )
}



export default StockList