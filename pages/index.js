import Head from "next/head";
import Image from "next/image";
import ConnectWallet from "../src/components/ConnectWallet/ConnectWallet";
import styles from "../src/shared/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ConnectWallet />
    </div>
  );
}
