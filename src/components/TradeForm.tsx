import { useState, useContext } from "react";
import { useWeb3 } from "../context/Web3Context";

export const TradeForm = () => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const { account } = useWeb3();

  const handleTrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!account) return alert("Connect wallet first!");
    alert(`Demo order: ${amount} BTC @ ${price} USDT`);
    setAmount("");
    setPrice("");
  };

  return (
    <form onSubmit={handleTrade}>
      <input
        type="number"
        placeholder="Amount (BTC)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price (USDT)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
};
