import { OrderBook } from "../components/OrderBook";
import { TradeForm } from "../components/TradeForm";
import { Wallet } from "../components/Wallet";

export const TradePage = () => {
  return (
    <div>
      <header className="exchange-header">
        <div className="pair-display">BTC/USDT</div>
        <Wallet />
      </header>

      <div className="price-chart">
        <span>Price Chart (Coming Soon)</span>
      </div>

      <div className="trade-container">
        <OrderBook />
        <TradeForm />
        <div className="order-history">
          <h3>Recent Trades</h3>
          {/* Добавить историю позже */}
        </div>
      </div>
    </div>
  );
};
