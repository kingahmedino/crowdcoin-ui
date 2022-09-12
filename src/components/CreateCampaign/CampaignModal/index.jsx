import { Button, Modal, Box } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";

const CampaignModal = ({ opened, onClose, reset }) => {
  const router = useRouter();

  const data =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("campaignData"));

  const [loading, setLoading] = useState(false);

  const handleCreateCampaign = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      reset();
      onClose();
      router.push("/campaigns/myCampaigns");
    }, 3000);
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
          You are about to create a new campaign
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
              {data.campaignName}
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
              {data.validatorName}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "51px",
              maxWidth: "250px",
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
              Minimum contribution
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
              {data.minAmount} ETH{" "}
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
              Campaign Description
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
              {data.campaignDescription}
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
            onClick={handleCreateCampaign}
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
            Create Campaign
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CampaignModal;
