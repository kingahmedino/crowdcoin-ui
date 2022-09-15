import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const CoinbaseWallet = new WalletLinkConnector({
  url: "https://goerli.infura.io/v3/adaa638d09ba451589fc8a00235e3489",
  appName: "Crowdcoin",
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const WalletConnect = new WalletConnectConnector({
  rpcUrl: "https://goerli.infura.io/v3/adaa638d09ba451589fc8a00235e3489",
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
