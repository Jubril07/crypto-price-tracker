import React from "react";
import { Link } from "react-router-dom";
import Coin from "../Routes/Coin";
import CoinItem from "./CoinItem";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div className="heading">
        <p>No</p>
        <p className="coin-name">Coins</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Market</p>
      </div>
      {coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} key={coins.id} element={<Coin />}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
