type History = {
  price: number;
  timestamp: Date;
};

export type Coin = {
  history_24h: History[];
  id: string;
  market_cap: number;
  name: string;
  price: number;
  price_1h_percentage_change: number;
  price_7d_percentage_change: number;
  price_24h_percentage_change: number;
  rank: number;
  scores: {
    coinpaper: number;
    auto: number;
    development: number;
    telegram: number;
    reddit: number;
    trend: number;
  };
  symbol: string;
  volume: number;
};
