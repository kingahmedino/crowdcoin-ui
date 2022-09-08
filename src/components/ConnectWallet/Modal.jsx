import { Button, Modal } from "@mantine/core";
import styles from "../../shared/styles/ConnectWallet.module.css";
import { useWeb3React } from "@web3-react/core";
import {
  CoinbaseWallet,
  Injected,
  WalletConnect,
} from "../../utils/connectors";
import Metamask from "./images/metamask 1.png";
import WalletConnectImg from "./images/WalletConnect.png";
import Coinbase from "./images/cbw.png";
import Image from "next/image";
import Link from "next/link";

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
    <Modal
      size={865}
      centered
      withCloseButton={false}
      opened={opened}
      onClose={onClose}
      overlayColor="rgba(139, 193, 209, 0.4)"
      styles={{
        modal: {
          borderRadius: 16,
          boxShadow: "8px 10px 24px rgba(37, 99, 235, 0.1)",
          padding: 32,
          margin: 0,
        },
      }}
    >
      <h1 className={styles.modalH1}>Connect Wallet</h1>
      <p className={styles.modalP}>Select a wallet</p>
      <Button
        fullWidth
        variant="default"
        styles={{
          root: {
            height: 80,
            borderRadius: 16,
            border: "1px solid #91b3ff",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: "26px",
            paddingLeft: 24,
            marginBottom: 32,
          },
          inner: {
            justifyContent: "space-between",
            width: 176,
          },
        }}
        leftIcon={<Image src={Metamask} alt="metamask" />}
        onClick={handleMetaMask}
      >
        Metamask
      </Button>
      <Button
        styles={{
          root: {
            height: 80,
            borderRadius: 16,
            border: "1px solid #91b3ff",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: "26px",
            paddingLeft: 24,
            marginBottom: 32,
          },
          inner: {
            justifyContent: "space-evenly",
            width: 237,
          },
        }}
        fullWidth
        variant="default"
        leftIcon={<Image src={WalletConnectImg} alt="walletconnect" />}
        onClick={handleWalletConnect}
      >
        WalletConnect
      </Button>
      <Button
        styles={{
          root: {
            height: 80,
            borderRadius: 16,
            border: "1px solid #91b3ff",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: "26px",
            paddingLeft: 24,
            marginBottom: 32,
          },
          inner: {
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 240,
          },
        }}
        fullWidth
        variant="default"
        leftIcon={
          <Image width={40} height={40} src={Coinbase} alt="coinbase" />
        }
        onClick={handleCoinbaseWallet}
      >
        Coinbase Wallet
      </Button>
      <div className={styles.text}>
        <p className={styles.subText}>New to Ethereum?</p>
        <p>
          Learn about wallets and create your first one{" "}
          <Link href="#">here</Link>
        </p>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
