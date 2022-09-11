import { Button, ScrollArea } from "@mantine/core";
import styles from "../../../shared/styles/Dashboard.module.css";
import { useWeb3React } from "@web3-react/core";
import RightArrow from "../../../../images/RightArrow.svg";
import Image from "next/image";
import CampaignData from "./data.json";
import { ethers } from "ethers";
import Link from "next/link";
import FileRemove from "../../../../images/FileRemove.svg";

const DashboardCampaign = () => {
  const { active } = useWeb3React();

  return (
    <div className={styles.dashboardCampaignContainer}>
      <div className={styles.dashboardCampaignHeader}>
        <h3>My Campaigns</h3>
        {active ? (
          <Button
            styles={{
              root: {
                backgroundColor: "#2563EB",
              },
            }}
            radius={16}
          >
            View all
          </Button>
        ) : null}
      </div>
      <div
        className={
          active
            ? styles.dashboardCampaignBody
            : styles.dashboardCampaignBodyActive
        }
      >
        {active ? (
          <ScrollArea style={{ height: 320 }}>
            {CampaignData.data.map((data) => (
              <div key={data.id} className={styles.dashboardCampaignBodyCard}>
                <div className={styles.dashboardCampaignBodyCardLeft}>
                  <h4 className={styles.dashboardCampaignBodyCardLeftHeader}>
                    {data.name}
                  </h4>
                  <div>
                    <p className={styles.dashboardCampaignBodyCardLeftP1}>
                      {data.caption}
                    </p>
                    <p className={styles.dashboardCampaignBodyCardLeftP2}>
                      {ethers.utils.formatEther(data.amount)} ETH
                    </p>
                  </div>
                </div>
                <div>
                  <Link href="/">
                    <a>
                      <Image src={RightArrow} alt="right arrow" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </ScrollArea>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Image src={FileRemove} alt="file remove" />
              </div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#6d6d6d",
                  maxWidth: "318px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Connect a wallet to see your created campaigns
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCampaign;
