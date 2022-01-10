import React, { useState, useEffect } from "react";

import Lottie from "react-lottie";

import { Coin } from "..";

import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTableHelper } from "./useTableHelper";

export const Table = () => {
  const {
    coins,
    isLoading,
    error,
    coinInfo,
    show,
    warningOption,
    defaultOptions,
    errorOptions,
    handleClick,
    handleClose,
  } = useTableHelper();

  if (isLoading) {
    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Lottie options={errorOptions} height={400} width={400} />
      </div>
    );
  }

  return (
    <div>
      <div className="crypton-banner">
        <p className="text-center">
          Use a bigger Screen size for best experience
        </p>
        <Lottie options={warningOption} height={200} width={200} />
      </div>
      <div className="crypton-table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Rank</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(
              (
                { id, name, symbol, rank, market_cap, price, volume },
                coinIndex
              ) => (
                <Coin
                  key={id}
                  id={id}
                  name={name}
                  symbol={symbol}
                  rank={rank}
                  market_cap={market_cap}
                  price={price}
                  volume={volume}
                  coinIndex={`${coinIndex + 1}`}
                  handleClick={handleClick}
                />
              )
            )}
          </tbody>
        </table>
        {coinInfo ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{coinInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{coinInfo.volume.toLocaleString()}</h4>
              <span>Volume</span>

              <div>Percentage Price Change</div>
              <div className="mt-4 d-flex w-100">
                <span className="modal-coin-stats">
                  <h5>{coinInfo.price_1h_percentage_change}</h5>
                  <p>Last 1h</p>
                </span>
                <span className="modal-coin-stats">
                  <h5>{coinInfo.price_24h_percentage_change}</h5>
                  <p>Last 24hrs</p>
                </span>
                <span className="modal-coin-stats">
                  <h5>{coinInfo.price_24h_percentage_change}</h5>
                  <p>Last 7d</p>
                </span>
              </div>
              <div></div>
            </Modal.Body>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
