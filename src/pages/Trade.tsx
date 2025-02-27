import { OrderBook } from "../components/OrderBook";
import { TradeForm } from "../components/TradeForm";
import { Wallet } from "../components/Wallet";

export const TradePage = () => {
  return (
    <div className="trade-container">
      <Wallet />
      <OrderBook />
      <TradeForm />
    </div>
  );
};
