import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onRemoveStock }) {
  const stocksList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock} />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksList}
    </div>
  );
}

export default PortfolioContainer;
