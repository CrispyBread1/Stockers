import React, { useEffect, useState } from "react";
import StockList from "../components/StockList";

import Data from "../testPageData";
import StockProbability from "../components/StockProbability";


const StockBox = () => {
    
    const [stockList, setStockList] = useState([])
    const [symbol, setSymbol] = useState('mm')
    const [stockForDetail, setStockforDetail] = useState('')

    let url = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI'
    const moreDetailURL = `https://api.stockdata.org/v1/data/intraday?symbols=AAPL&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI`
    
    const testData = Data

    const changeURL = (ticker) => {
        url = moreDetailURL
        setSymbol(ticker)
        loadMoreDetailStock(moreDetailURL)
    }


    // useEffect(() => {
    //     loadListOfStocks(url)
    //     loadMoreDetailStock(moreDetailURL)
    // }, [])

    const loadListOfStocks = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(stocksList => setStockList(stocksList.data))
    }

    const loadMoreDetailStock = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(stock => setStockforDetail(stock.data))
        
    }
    // console.log(stockForDetail)
    
    // console.log(testData)
    
    return (
       <>
        <h1>StockBox</h1>
        {!symbol && <StockList stockListProp={stockList} changeURL={changeURL}/>}
        {symbol && <StockProbability stockDetailProp={stockForDetail} testData={testData}/>}
        </>
    )

}



export default StockBox