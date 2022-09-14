import { Button, Modal, Box, Notification } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";
import Notify from "./Notify";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import CampaignABI from '../../../../ethereum/CampaignABI.json'

const ConfirmationModal = ({
  opened,
  onClose,
  reset,
  withDrawalData,
  campaignData,
}) => {

  const { active, library } = useWeb3React()

  const [loading, setLoading] = useState(false);
  const requestWithdrawal = async () => {
    try {
     if (active) {
      setLoading(() => true);
        const campaignInstance = new ethers.Contract(
          campaignData.address,
          CampaignABI,
          library.getSigner(),
        )

        await campaignInstance
          .createRequest(
            withDrawalData.withdrawalReason,
            ethers.utils.parseUnits(withDrawalData.amount, 'ether'),
            withDrawalData.destinationAddress,
            { gasLimit: 200000 }
          )
          .then((tx) => tx.wait())

        setTimeout(() => {
        onClose();
        setLoading(() => false);
      }, 3000);
      Notify(withDrawalData, campaignData.campaign_name);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <Modal
      padding={37}
      opened={opened}
      centered
      size={869}
      title="Review"
      onClose={onClose}
      closeOnClickOutside={false}
      overlayColor="rgba(139, 193, 209, 0.4)"
      styles={{
        modal: {
          borderRadius: 16,
          boxShadow: "8px 10px 24px rgba(37, 99, 235, 0.1)",
          padding: 32,
          margin: 0,
        },
        title: {
          fontSize: 32,
          lineHeight: "35px",
          fontWeight: 400,
          color: "#040404",
        },
        header: {
          margin: 0,
          marginBottom: 16,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            margin: "0 ",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "17px",
            color: "#646E86",
            marginBottom: "32px",
          }}
          component="p"
        >
          You are about to initiate a withdrawal from the campaing End SARS.
        </Box>
        <Box
          sx={{
            borderRadius: "16px",
            border: "1px solid #7EB4C5",
            marginBottom: "32px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "51px",
              maxWidth: "190px",
              width: "100%",

              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",

                margin: 0,
              }}
              component="p"
            >
              Campaign name
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
              {campaignData?.campaign_name}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "51px",
              maxWidth: "190px",
              width: "100%",

              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",

                margin: 0,
              }}
              component="p"
            >
              Validator name
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
             {campaignData?.validator_name}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "51px",
              width: "100%",

              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",

                margin: 0,
              }}
              component="p"
            >
              Withdrawal request amount
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
              {withDrawalData?.amount} ETH{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "51px",

              width: "100%",

              marginBottom: "40px",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",

                margin: 0,
              }}
              component="p"
            >
              Reason for withdrawal
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
              {withDrawalData?.withdrawalReason}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              padding: "16px 24px",
              borderRadius: "16px",
              backgroundColor: "#fff",
              height: "auto",
              fontWeight: "400",
              fontSize: "18.3672px",
              lineHeight: "20px",
              color: "#2563EB",
              border: "1px solid #2563EB",
              width: "100%",
              maxWidth: "214px",
            }}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            loading={loading}
            onClick={requestWithdrawal}
            sx={{
              marginLeft: "24px",
              padding: "16px 24px",
              borderRadius: "16px",
              backgroundColor: "#2563EB",
              height: "auto",
              fontWeight: "400",
              fontSize: "18.3672px",
              lineHeight: "20px",
              color: "#FFFFFF",
              maxWidth: loading ? "214px" : "auto",
            }}
          >
            Request Withdrawal
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
