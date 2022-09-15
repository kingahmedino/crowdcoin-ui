import { Box } from '@mantine/core'
import ContributeTable from '../../../src/components/Contribute/Table'
import { ethers, BigNumber } from 'ethers'
import CampaignFactoryABI from '../../../ethereum/CampaignFactoryABI.json'
import CampaignABI from '../../../ethereum/CampaignABI.json'

export default function contribute({ data }) {
  return (
    <Box>
      <ContributeTable data={data} />
    </Box>
  )
}

export async function getServerSideProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/adaa638d09ba451589fc8a00235e3489',
  )

  const campaignFactoryInstance = new ethers.Contract(
    '0x107F67F583580F0B6AD61125CC37901A8B08dA83',
    CampaignFactoryABI,
    provider,
  )

  const campaigns = await campaignFactoryInstance.getDeployedCampaigns()
  const a = BigNumber.from('1000')

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
      obj['5'] = BigNumber.from(obj['5']).mul(a)
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
