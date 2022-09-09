import { Card, Grid } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ConnectWallet from "../src/components/ConnectWallet/ConnectWallet";
import DashbordCard from "../src/components/Dashboard/Card/Card";
import DashbordTable from "../src/components/Dashboard/Table/Table";
import styles from "../src/shared/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ConnectWallet />
      <DashbordCard />
      <Grid>
        <Grid.Col span={8}>
          <DashbordTable />
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>
      </Grid>
    </div>
  );
}
