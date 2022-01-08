import React, { useState, useEffect } from "react";

import axios from "axios";
import Lottie from "react-lottie";

import { Coin } from "..";
import { parseError } from "../../utils/parseError";

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
    defaultOptions,
    errorOptions,
    handleClick,
    handleClose,
  } = useTableHelper();
  console.log(coinInfo);

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
      <div className="crypton-banner">Use a bigger screen size</div>
      <div className="crypton-table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Volume</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(({ id, name, symbol, price, volume }, coinIndex) => (
              <Coin
                key={id}
                id={id}
                name={name}
                symbol={symbol}
                price={price}
                volume={volume}
                coinIndex={`${coinIndex + 1}`}
                handleClick={handleClick}
              />
            ))}
          </tbody>
        </table>
        {coinInfo ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{coinInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Volume: {coinInfo.volume}</p>
            </Modal.Body>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
