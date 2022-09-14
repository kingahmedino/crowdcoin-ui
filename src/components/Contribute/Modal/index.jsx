import { Button, Modal } from "@mantine/core";
import { useContext, useState } from "react";
import { Default } from "./Steps/Default";
import { TableDataContext } from "../Table";
import Verified from "../Table/Verified";
import { Box } from "@mantine/core";

export const ContributeModal = ({ open, close }) => {
  const TableData = useContext(TableDataContext);
  console.log(TableData);

  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Default />;
      case 1:
        return <Verified />;
      default:
        return <Default />;
    }
  };

  const handleStepChange = () => {
    setStep((step) => step + 1);
  };

  return (
    <Modal
      padding={37}
      size={869}
      centered
      closeOnClickOutside={false}
      overlayColor="rgba(139, 193, 209, 0.4)"
      styles={{
        title: {
          fontSize: "32px",
          fontWeight: "400",
          lineHeight: "35px",
          maxWidth: "500px",
          width: "100%",
          color: "#040404",
        },
        modal: {
          borderRadius: "16px",
          boxShadow: "8px 10px 24px rgba(37, 99, 235, 0.1)",
          padding: 32,
          margin: 0,
        },
        close: {
          borderRadius: "50%",
          backgroundColor: " rgba(139, 193, 209, 0.4)",
          "&:hover": {
            backgroundColor: " rgba(139, 193, 209, 0.9)",
          },
        },
      }}
      opened={open}
      onClose={close}
      title={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginRight: "4px",
            }}
          >
            {" "}
            {TableData.CampaignName}
          </Box>{" "}
          <Verified />{" "}
        </Box>
      }
    >
      {renderStep()}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "32px",
        }}
      >
        <Button
          variant="outline"
          sx={{
            marginRight: "16px",
            color: "#dc2626",
            borderColor: "#dc2626",
            padding: "16px 24px",
            maxWidth: "214px",
            width: "100%",
            height: "64px",
            fontSize: "18.3672px",
            lineHeight: "20px",
            fontWeight: "400",
            borderRadius: "16px",
          }}
        >
          Report
        </Button>
        <Button
          onClick={handleStepChange}
          sx={{
            backgroundColor: "#2563EB",
            padding: "16px 24px",
            maxWidth: "214px",
            width: "100%",
            height: "64px",
            fontSize: "18.3672px",
            lineHeight: "20px",
            fontWeight: "400",
            borderRadius: "16px",
          }}
        >
          Contribute
        </Button>
      </Box>
    </Modal>
  );
};
