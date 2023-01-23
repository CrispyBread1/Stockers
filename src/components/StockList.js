import React from "react";
import Stock from "./Stock";


const StockList = ({stockListProp, changeURL}) => {

    // const stockArray = stockListProp.data

    

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