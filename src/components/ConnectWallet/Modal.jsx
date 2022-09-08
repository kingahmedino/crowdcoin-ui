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

  return (
    <Modal opened={opened} onClose={onClose}>
      <div>
        <h1>Connect Wallet</h1>
        <p>Select a wallet</p>
        <Button
          onClick={async () => {
            await activate(Injected);
            await setProvider("MetaMask");
            onClose();
          }}
        >
          Metamask
        </Button>
        <Button
          onClick={async () => {
            await activate(WalletConnect);
            await setProvider("WalletConnect");
            onClose();
          }}
        >
          WalletConnect
        </Button>
        <Button
          onClick={async () => {
            await activate(CoinbaseWallet);
            await setProvider("CoinbaseWallet");
            onClose();
          }}
        >
          Coinbase Wallet
        </Button>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
