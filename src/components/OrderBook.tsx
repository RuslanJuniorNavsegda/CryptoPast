import { useState, useEffect } from "react";

interface Order {
  price: number;
  amount: number;
  type: "bid" | "ask";
}

export const OrderBook = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const mockOrders = Array.from({ length: 10 }).map((_, i) => ({
      price: 50000 + i * 100,
      amount: 0.1 + i * 0.05,
      type: i % 2 === 0 ? "bid" : ("ask" as "bid" | "ask"),
    }));
    setOrders(mockOrders);
  }, []);

  return (
    <div className="order-book">
      <h3>Order Book (BTC/USDT)</h3>
      <div className="orders">
        {orders.map((order, i) => (
          <div key={i} className={`order ${order.type}`}>
            <span>{order.price.toFixed(2)}</span>
            <span>{order.amount.toFixed(4)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
