import axios from "axios";
import Lottie from "react-lottie";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

import Loading from "../../public/loading.json";
import Error from "../../public/error.json";

import React, { useState, useEffect } from "react";

import { Coin } from "..";
import { parseError } from "../../utils/parseError";

export const Table = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [isModalVisible, setModalVisibility] = useState(false);

  //   const passedCoinName = useContext(coinPassed);
  console.log(error);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const errorOptions = {
    loop: true,
    autoplay: true,
    animationData: Error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const fetchCoins = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.coinpaper.io/v1/coins/overview"
      );
      setCoins(response.data);
    } catch (error) {
      const message = parseError(error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

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
                setModalVisibility={setModalVisibility}
              />
            ))}
          </tbody>
        </table>
        <PureModal
          header="Coin Data"
          isOpen={isModalVisible}
          // closeButton="close"
          width="70%"
          portal
          // closeButtonPosition="bottom"
          closeButtonPosition="header"
          onClose={() => {
            setModalVisibility(false);
            return true;
          }}
        >
          <p>Your content goes here</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            pariatur aspernatur ullam ea iusto, neque ratione iste eaque nulla,
            explicabo voluptatum magnam praesentium dolorem fugiat dicta vero
            laudantium autem sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam pariatur aspernatur ullam ea iusto,
            neque ratione iste eaque nulla, explicabo voluptatum magnam
            praesentium dolorem fugiat dicta vero laudantium autem sapiente.
          </div>
        </PureModal>
      </div>
    </div>
  );
};
