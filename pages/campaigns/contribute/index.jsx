import { Box } from "@mantine/core";
import ContributeTable from "../../../src/components/Contribute/Table";
import { ethers } from "ethers";
import CampaignFactoryABI from "../../../ethereum/CampaignFactoryABI.json";
import CampaignABI from "../../../ethereum/CampaignABI.json";

export default function contribute({ data }) {
  return (
    <Box>
      <ContributeTable data={data} />
    </Box>
  );
}

export async function getServerSideProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/adaa638d09ba451589fc8a00235e3489"
  );

  const campaignFactoryInstance = new ethers.Contract(
    "0x6E3C134A71998F68947DabE1Bd13557e7D06aAfc",
    CampaignFactoryABI,
    provider
  );

  const campaigns = await campaignFactoryInstance.getDeployedCampaigns();

  const campaignsData = await Promise.all(
    campaigns.map(async (campaign) => {
      const campaignInstance = new ethers.Contract(
        campaign,
        CampaignABI,
        provider
      );
      let campaignSummary = await campaignInstance.getSummary();
      let obj = Object.assign({}, campaignSummary);
      obj["10"] = campaign;
      return obj;
    })
  );
  console.log(campaignsData);
  const data = JSON.parse(JSON.stringify(campaignsData));

  return {
    props: {
      data,
    },
  };
}
