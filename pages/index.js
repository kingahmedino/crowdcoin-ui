import { Grid } from "@mantine/core";

import DashbordCard from "../src/components/Dashboard/Card/Card";
import DashboardCampaign from "../src/components/Dashboard/MyCampaign/MyCampaign";
import DashbordTable from "../src/components/Dashboard/Table/Table";
import styles from "../src/shared/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <DashbordCard />
      <Grid>
        <Grid.Col xs={12} lg={8} span={8}>
          <DashbordTable />
        </Grid.Col>
        <Grid.Col xs={12} lg={4} span={4}>
          <DashboardCampaign />
        </Grid.Col>
      </Grid>
    </div>
  );
}
