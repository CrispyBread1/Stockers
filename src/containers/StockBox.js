import React, { useEffect, useState } from "react";
import StockList from "../components/StockList";
import Data from "../testPageData";
import StockProbability from "../components/StockProbability";



const StockBox = () => {
    
    const [stockList, setStockList] = useState([])
    const [stockProp, setStockProp] = useState('')
    const [stockForDetail, setStockforDetail] = useState([])
    const [tickerArray, setTickerArray] = useState([])



    let url = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI'
    
    
    const testData = Data



    const changeURL = (stockProp, ticker) => {
        setStockProp(stockProp)
        loadMoreDetailStock()
    }

    useEffect(() => {
        loadListOfStocks(url)
        
    }, [])

    useEffect(() => {
        setTickerArray(stockList.map((stockObject) => stockObject.ticker))
    }, [stockList])

    useEffect(() => {
        loadMoreDetailStock()
    }, [tickerArray])

    const loadListOfStocks = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(stocksList => setStockList(stocksList.data))
    }

    const getTheMoreDetailData = (moreDetURL, name) => {
        fetch(moreDetURL)
            .then(res => res.json())
            .then(res => {
                setStockforDetail([...stockForDetail, {[name]: res.data}])
            })
            .catch((error) => {
                console.error(`Failed to fetch: ${error}`)
            });
    }

    const loadMoreDetailStock = () => {
        for (const id of tickerArray) {
            const moreDetailedURL = `https://api.stockdata.org/v1/data/intraday?symbols=${id}&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI`
            getTheMoreDetailData(moreDetailedURL, id)
        }
        console.log(stockForDetail)
        
    
        
        
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