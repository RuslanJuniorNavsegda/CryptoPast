import { useWeb3 } from "../context/Web3Context";

export const Wallet = () => {
  const { account, connectWallet } = useWeb3();

  return (
    <div className="wallet">
      {account ? (
        <p>
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
    </div>
  );
};
