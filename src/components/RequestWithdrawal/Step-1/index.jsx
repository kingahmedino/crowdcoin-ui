import { Box, Text, TextInput } from "@mantine/core";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CampaignFactoryABI from '../../../../ethereum/CampaignFactoryABI.json'
import CampaignABI from '../../../../ethereum/CampaignABI.json'

export default function Step1({ errors, handleData }) {
  const [data, setData] = useState([])
  const { active, account } = useWeb3React()

  useEffect(() => {
    const myCampaigns = async () => {
      try {
        if (data.length == 0 && active) {
          const provider = new ethers.providers.JsonRpcProvider(
            'https://goerli.infura.io/v3/adaa638d09ba451589fc8a00235e3489',
          )

          const campaignFactoryInstance = new ethers.Contract(
            '0x107F67F583580F0B6AD61125CC37901A8B08dA83',
            CampaignFactoryABI,
            provider,
          )

          const myCampaigns = await campaignFactoryInstance.getCreatorCampaigns(
            account,
            // '0xFC3455b66Cd722BdD33d02cacDd323571e1C0066',
          )

          const myCampaignsData = await Promise.all(
            myCampaigns.map(async (campaign) => {
              const campaignInstance = new ethers.Contract(
                campaign,
                CampaignABI,
                provider,
              )
              let campaignSummary = await campaignInstance.getSummary()
              let b = Object.assign({}, campaignSummary)
              b['10'] = campaign
              let obj = {}
              obj.campaign_name = b['6']
              obj.validator_name = b['7']
              obj.address = b['10']
              obj.created_at = b['5']
              obj.min_amount = b['0']
              obj.balance = b['1']
              obj.amount_contributed = ethers.utils.formatEther(b['2'])
              obj.request_count = b['3']
              obj.contributor_count = b['4']
              obj.creator = b['9']
              obj.description = b['8']
              return obj
            }),
          )

          setData(myCampaignsData)
        }
      } catch (err) {
        console.log(err.message)
      }
    }

    myCampaigns()
  }, [active])

  return (
    <Box
      sx={{
        marginTop: "64px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="h2"
        style={{
          maxWidth: "330px",
        }}
        sx={{
          width: "100%",
          fontSize: "48px",
          lineHeight: "52px",
          fontWeight: "400",
          margin: "0px",
          marginBottom: "24px",
        }}
      >
        Select campaign
      </Box>
      <Text
        style={{
          maxWidth: "330px",
          width: "100%",
          margin: 0,
          marginBottom: "40px",
        }}
        size={24}
        color="#80889B"
      >
        Select a campaign you will like to request a withdrawal from.
      </Text>
      {data.map((item, index) => (
        <>
          <Card
            data={item}
            key={index}
            onPress={() => {
              handleData(item);
            }}
          />
        </>
      ))}
    </Box>
  );
}
