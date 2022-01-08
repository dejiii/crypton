type CoinProps = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  volume: number;
  coinIndex: string;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Coin = ({
  id,
  name,
  symbol,
  price,
  volume,
  coinIndex,
  setModalVisibility,
}: CoinProps) => {
  const handleClick = () => {
    setModalVisibility(true);
  };

  return (
    <tr>
      <td>{coinIndex}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>$ {price.toLocaleString()}</td>
      <td>{volume.toLocaleString()}</td>
      <td>
        <button className="more-info-button" onClick={handleClick}>
          More Info on {name}
        </button>
      </td>
    </tr>
  );
};
