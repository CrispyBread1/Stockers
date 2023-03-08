import React, { useEffect, useState } from "react";
import StockList from "../components/StockList";
import Data from "../testPageData";
import StockProbability from "../components/StockProbability";



const StockBox = () => {
    
    const [stockList, setStockList] = useState([])
    const [stockProp, setStockProp] = useState('')
    const [stockForDetail, setStockforDetail] = useState([])
    const [stockBeingAnalysed, setStockBeingAnalysed] = useState([])
   


    let url = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI'
    
    const testData = Data

    useEffect(() => {
        loadListOfStocks(url)
    }, [])



    const loadListOfStocks = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(stocksList => setStockList(stocksList.data))
    }

    const getTheMoreDetailData = (name) => {
        const moreDetailedURL = `https://api.stockdata.org/v1/data/intraday?symbols=${name}&api_token=f6MJlmpUiiaFPzcSztsLRU6LqpUc27hZCwNHDNMI`
        fetch(moreDetailedURL)
            .then(res => res.json())
            .then(res => setStockforDetail(res.data))
            .catch((error) => {
                console.error(`Failed to fetch: ${error}`)
            });
            setStockProp(name)
    }

    const returnToHome = () => {
        setStockProp('')
    }
    
    return (
       <>
        {!stockProp && <StockList stockListProp={stockList} getTheMoreDetailData={getTheMoreDetailData}/>}
        {stockProp && <StockProbability stockDetailProp={stockForDetail} testData={testData} stockProp={stockProp} returnToHome={returnToHome}/>}
        </>
    )

}



export default StockBox