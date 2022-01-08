type CoinProps = {
  id: string;
  name: string;
  symbol: string;
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
      <td>$ {price.toLocaleString()}</td>
      <td>{volume.toLocaleString()}</td>
      <td>
        <button className="more-info-button" onClick={() => handleClick(id)}>
          Read more on {name}
        </button>
      </td>
    </tr>
  );
};
