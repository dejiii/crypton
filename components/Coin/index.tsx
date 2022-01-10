type CoinProps = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  market_cap: number;
  price: number;
  volume: number;
  coinIndex: string;
  handleClick: (id: string) => void;
  // setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Coin = ({
  id,
  name,
  symbol,
  rank,
  market_cap,
  price,
  volume,
  coinIndex,
  handleClick,
}: // setModalVisibility,
CoinProps) => {
  return (
    <tr>
      <td>{coinIndex}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{rank}</td>
      <td>{market_cap.toLocaleString()}</td>
      <td>$ {price.toLocaleString()}</td>
      <td>{volume.toLocaleString()}</td>
      <td>
        <button className="more-info-button" onClick={() => handleClick(id)}>
          More info {">>"}
        </button>
      </td>
    </tr>
  );
};
