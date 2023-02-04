import React, { useEffect, useState } from "react";
import StockList from "../components/StockList";
import Data from "../testPageData";
import StockProbability from "../components/StockProbability";



const StockBox = () => {
    
    const [stockList, setStockList] = useState([])
    const [stockProp, setStockProp] = useState('')
    const [stockForDetail, setStockforDetail] = useState([])
    const [ticker, setTicker] = useState('TSLA')



    let url = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI'
    
    const MoreDetailURLs= `https://api.stockdata.org/v1/data/intraday?symbols=${ticker}&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI`
    const testData = Data



    const changeURL = (stockProp, ticker) => {
        setStockProp(stockProp)
        setTicker(ticker)
        loadMoreDetailStock(MoreDetailURLs)
        // url = moreDetailURL
    }

    useEffect(() => {
        loadListOfStocks(url)
        loadMoreDetailStock(MoreDetailURLs[ticker])
    }, [])

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

    const returnToHome = () => {
        setStockProp('')
    }


    
    return (
       <>
        {/* <h1>StockBox</h1> */}
        {!stockProp && <StockList stockListProp={stockList} changeURL={changeURL}/>}
        {stockProp && <StockProbability stockDetailProp={stockForDetail} testData={testData} stockProp={stockProp} returnToHome={returnToHome}/>}
        </>
    )

}



export default StockBox