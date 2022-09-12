import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const CoinbaseWallet = new WalletLinkConnector({
  url: process.env.NEXT_PUBLIC_RPC_URL,
  appName: "Crowdcoin",
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const WalletConnect = new WalletConnectConnector({
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
