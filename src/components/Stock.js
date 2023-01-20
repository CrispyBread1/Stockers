import React from "react";



const Stock = ({stock, changeURL}) => {
    
    const moreDetail = () => {
        changeURL(stock.ticker)
    }
    
    return(
        <>
            <li>
                <h3 onClick={moreDetail}>Stock: {stock.name}</h3> 
                <p>Current price: {stock.price} <br/> 
                Day change: {stock.day_change} <br/> 
                Previouse day close: {stock.previous_close_price}</p>
                
            </li>
        </>
    )
}



export default Stock