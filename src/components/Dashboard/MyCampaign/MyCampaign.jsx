import { Button, ScrollArea } from '@mantine/core'
import styles from '../../../shared/styles/Dashboard.module.css'
import { useWeb3React } from '@web3-react/core'
import RightArrow from '../../../../images/RightArrow.svg'
import Image from 'next/image'
import CampaignData from './data.json'
import { ethers } from 'ethers'
import Link from 'next/link'
import FileRemove from '../../../../images/FileRemove.svg'
import { useEffect, useState } from 'react'
import CampaignFactoryABI from '../../../../ethereum/CampaignFactoryABI.json'
import CampaignABI from '../../../../ethereum/CampaignABI.json'

const DashboardCampaign = () => {
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
              obj.name = b['6']
              obj.validator = b['7']
              obj.address = b['10']
              obj.created_at = b['5']
              obj.min_amount = b['0']
              obj.balance = b['1']
              obj.total_contributed = b['2']
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
    <div className={styles.dashboardCampaignContainer}>
      <div className={styles.dashboardCampaignHeader}>
        <h3 className={styles.dashboardTableHeader}>My Campaigns</h3>
        {active ? (
          <Button
            styles={{
              root: {
                backgroundColor: '#2563EB',
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
          <>
            {data.length !== 0 ? (
              <ScrollArea style={{ height: 320 }}>
                {data.map((data, key) => (
                  <div key={key} className={styles.dashboardCampaignBodyCard}>
                    <div className={styles.dashboardCampaignBodyCardLeft}>
                      <h4
                        className={styles.dashboardCampaignBodyCardLeftHeader}
                      >
                        {data.name}
                      </h4>
                      <div>
                        <p className={styles.dashboardCampaignBodyCardLeftP1}>
                          Amount contributed
                        </p>
                        <p className={styles.dashboardCampaignBodyCardLeftP2}>
                          {ethers.utils.formatEther(data.total_contributed)} ETH
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
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '22px',
                      color: '#6d6d6d',
                      maxWidth: '318px',
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    You don't have a campaign
                  </p>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <Image src={FileRemove} alt="file remove" />
              </div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '22px',
                  color: '#6d6d6d',
                  maxWidth: '318px',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                Connect a wallet to see your created campaigns
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DashboardCampaign
