import { Button, Modal } from "@mantine/core";
import styles from "../../shared/styles/ConnectWallet.module.css";
import { useWeb3React } from "@web3-react/core";
import {
  CoinbaseWallet,
  Injected,
  WalletConnect,
} from "../../utils/connectors";

const ConnectWalletModal = ({ opened, onClose }) => {
  const { active, account, activate } = useWeb3React();

  const setProvider = async (type) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("provider", type);
      window.localStorage.setItem("isWalletConnected", true);
    }
  };

  const handleMetaMask = async () => {
    try {
      await activate(Injected);
      setProvider("MetaMask");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleWalletConnect = async () => {
    try {
      await activate(WalletConnect);

      await setProvider("WalletConnect");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCoinbaseWallet = async () => {
    try {
      await activate(CoinbaseWallet);
      setProvider("CoinbaseWallet");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose}>
      <div>
        <h1>Connect Wallet</h1>
        <p>Select a wallet</p>
        <Button onClick={handleMetaMask}>Metamask</Button>
        <Button onClick={handleWalletConnect}>WalletConnect</Button>
        <Button onClick={handleCoinbaseWallet}>Coinbase Wallet</Button>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
