import React, { useEffect, useState } from "react";
import StockList from "../components/StockList";
import SingleDetailedStock from "../components/SingleDetailedStock";


const StockBox = () => {
    
    const [stockList, setStockList] = useState([])
    const [symbol, setSymbol] = useState('')
    const [stockForDetail, setStockforDetail] = useState([])

    let url = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI'
    const moreDetailURL = `https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI`
    


    const changeURL = (ticker) => {
        url = moreDetailURL
        setSymbol(ticker)
        loadMoreDetailStock(moreDetailURL)
    }


    useEffect(() => {
        loadListOfStocks(url)
    }, [])

    const loadListOfStocks = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(stocksList => setStockList(stocksList.data))
    }

    const loadMoreDetailStock = (url) => {
        fetch(url)
        .then(res => res.join())
        .then(stock => setStockforDetail(stock.data))
    }
    
    // console.log(stockList)
    
    return (
       <>
        <h1>StockBox</h1>
        {!symbol && <StockList stockListProp={stockList} changeURL={changeURL}/>}
        {symbol && <SingleDetailedStock stockDetailProp={stockForDetail}/>}
        </>
    )

}



export default StockBox