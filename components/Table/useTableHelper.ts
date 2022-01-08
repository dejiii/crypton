import { useState, useEffect } from "react";
import axios from "axios";
import { Coin as CoinType } from "../../models/coin.model";
import { parseError } from "../../utils/parseError";

import Loading from "../../public/loading.json";
import Error from "../../public/error.json";
export const useTableHelper = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [coinInfo, setCoinInfo] = useState<CoinType | undefined>(undefined);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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

  const handleClick = (id: string) => {
    const getCoin = coins.find((coin: CoinType) => coin.id === id) as
      | CoinType
      | undefined;
    setCoinInfo(getCoin);
    setShow(true);
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

  return {
    coins,
    isLoading,
    error,
    coinInfo,
    show,
    defaultOptions,
    errorOptions,
    handleClick,
    handleClose,
  };
};
