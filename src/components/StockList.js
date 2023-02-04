import React from "react";
import Stock from "./Stock";
import './stockList_style.css';


const StockList = ({stockListProp, changeURL}) => {

    // const stockArray = stockListProp.data

    

    const listOfStocks = stockListProp.map((stock, index) => {
        
        return(
            <Stock stock={stock} key={index} changeURL={changeURL}/>
        )
    })

    
    
    return(
        <ol id="list-of-stocks">
            <h2>Stock List</h2>
            {listOfStocks}
        </ol>
    )
}



export default StockList