import { useWeb3 } from "../context/Web3Context";

export const Wallet = () => {
  const { account, connectWallet } = useWeb3();

  return (
    <div className="wallet">
      {account ? (
        <div className="wallet-info">
          <span className="wallet-label">Connected:</span>
          <span className="wallet-address">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};
