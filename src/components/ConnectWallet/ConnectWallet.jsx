import { Button, Navbar, SimpleGrid } from "@mantine/core";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import ConnectWalletModal from "./Modal";
import { useEffect, useState } from "react";
import {
  Injected,
  CoinbaseWallet,
  WalletConnect,
} from "../../utils/connectors";
import styles from "../../shared/styles/ConnectWallet.module.css";

const ConnectWallet = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { activate, deactivate, active, account } = useWeb3React();

  const [isOpen, setIsOpen] = useState(false);

  // Handle disconnect wallet
  const refreshState = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("provider", undefined);

      window.localStorage.setItem("isWalletConnected", false);
    }
  };
  const disconnect = () => {
    refreshState();
    deactivate();
  };

  // Persist provider on browser reload
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (typeof window !== "undefined") {
        if (window.localStorage?.getItem("isWalletConnected") === "true") {
          if (window.localStorage?.getItem("provider") === "MetaMask") {
            await activate(Injected);
          } else if (
            window.localStorage?.getItem("provider") === "WalletConnect"
          ) {
            await activate(WalletConnect);
          } else if (
            window.localStorage?.getItem("provider") === "CoinbaseWallet"
          ) {
            await activate(CoinbaseWallet);
          }
        }
      }
    };
    connectWalletOnPageLoad();
  }, [activate]);

  return (
    <>
    {!active ? (
      <Button
        onClick={() => setIsOpen(true)}
        styles={(theme) => ({
          root: {
            backgroundColor: "#2563EB",
            padding: "16px 22.5px",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 24,
            height: 58,
            //   color: "#fff",
            borderRadius: 24,
          },
        })}
      >
        Connect Wallet
      </Button>
    ) : (
      <Button
        onClick={disconnect}
        styles={(theme) => ({
          root: {
            backgroundColor: "#2563EB",
            padding: "16px 22.5px",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 24,
            height: 58,
            //   color: "#fff",
            borderRadius: 24,
          },
        })}
      >
        {account.slice(0, 5) + "..." + account.slice(37, 42)}
      </Button>
    )}
  <ConnectWalletModal opened={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ConnectWallet;
