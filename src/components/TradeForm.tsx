import { useState, useContext } from "react";
import { useWeb3 } from "../context/Web3Context";

export const TradeForm = () => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [orderType, setOrderType] = useState<"limit" | "market">("limit");
  const { account } = useWeb3();

  const handleTrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!account) return alert("Connect wallet first!");

    const orderDetails =
      orderType === "limit"
        ? `Limit Order: ${amount} BTC @ ${price} USDT`
        : `Market Order: ${amount} BTC`;

    alert(orderDetails);
    setAmount("");
    setPrice("");
  };

  return (
    <div className="trade-form">
      <div className="order-type-selector">
        <button
          type="button"
          className={orderType === "limit" ? "active" : ""}
          onClick={() => setOrderType("limit")}
        >
          Limit Order
        </button>
        <button
          type="button"
          className={orderType === "market" ? "active" : ""}
          onClick={() => setOrderType("market")}
        >
          Market Order
        </button>
      </div>

      <form onSubmit={handleTrade}>
        <input
          type="number"
          placeholder={`Amount (BTC)`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.0001"
          min="0.0001"
          required
        />

        {orderType === "limit" && (
          <input
            type="number"
            placeholder="Price (USDT)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            min="0.01"
            required
          />
        )}

        <button type="submit">
          {orderType === "limit" ? "Place Limit Order" : "Place Market Order"}
        </button>
      </form>
    </div>
  );
};
