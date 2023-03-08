import React from "react";
import './stock_style.css';



const Stock = ({stock, getTheMoreDetailData }) => {
    
    // const stockLength = 
    
    const moreDetail = () => {
        getTheMoreDetailData(stock.ticker)
    }
    
    // console.log(stockDetail)


    return(
        <>
            <li id="stock">
                <h3 id="stock-title" onClick={moreDetail}>{stock.name}</h3> 
                <p>Current price: {stock.price} <br/> 
                Day change: {stock.day_change} <br/> 
                Previouse day close: {stock.previous_close_price}</p>
                {/* <p>{stockDetail}</p> */}
                <button onClick={moreDetail}>Click for more Detail</button>
            </li>
        </>
    )
}



export default Stock