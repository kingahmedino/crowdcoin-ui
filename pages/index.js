import { Card, Grid } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ConnectWallet from '../src/components/ConnectWallet/ConnectWallet'
import { ethers } from 'ethers'
import CampaignFactoryABI from '../ethereum/CampaignFactoryABI.json'
import CampaignABI from '../ethereum/CampaignABI.json'
import DashbordCard from '../src/components/Dashboard/Card/Card'
import DashboardCampaign from '../src/components/Dashboard/MyCampaign/MyCampaign'
import DashbordTable from '../src/components/Dashboard/Table/Table'
import styles from '../src/shared/styles/Home.module.css'

export default function Home({ data }) {
  // console.log(data)
  return (
    <div className={styles.container}>
      <DashbordCard />
      <Grid>
        <Grid.Col xs={12} lg={8} span={8}>
          <DashbordTable data={data} />
        </Grid.Col>
        <Grid.Col xs={12} lg={4} span={4}>
          <DashboardCampaign />
        </Grid.Col>
      </Grid>
    </div>
  )
}

export async function getServerSideProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/adaa638d09ba451589fc8a00235e3489',
  )

  const campaignFactoryInstance = new ethers.Contract(
    '0x6E3C134A71998F68947DabE1Bd13557e7D06aAfc',
    CampaignFactoryABI,
    provider,
  )

  const campaigns = await campaignFactoryInstance.getDeployedCampaigns()

  const campaignsData = await Promise.all(
    campaigns.map(async (campaign) => {
      const campaignInstance = new ethers.Contract(
        campaign,
        CampaignABI,
        provider,
      )
      let campaignSummary = await campaignInstance.getSummary()
      let obj = Object.assign({}, campaignSummary)
      obj['10'] = campaign
      return obj
    }),
  )
  console.log(campaignsData)
  const data = JSON.parse(JSON.stringify(campaignsData))

  return {
    props: {
      data,
    },
  }
}
