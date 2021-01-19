import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  const stocksArray = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} onStockClick={onAddStock} />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stocksArray}
    </div>
  );
}

export default StockContainer;
