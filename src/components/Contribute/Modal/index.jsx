import { Modal } from "@mantine/core";
import { useContext } from "react";
import { Default } from "./Steps/Default";
import { TableDataContext } from "../Table";
import Verified from "../Table/Verified";
import { Box } from "@mantine/core";

export const ContributeModal = ({ open, close }) => {
  const TableData = useContext(TableDataContext);
  console.log(TableData);
  return (
    <Modal
      styles={{
        title: {
          fontSize: "32px",
          fontWeight: "400",
          lineHeight: "35px",
          maxWidth: "312px",
          width: "100%",
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
          <Box> {TableData.CampaignName}</Box> <Verified />{" "}
        </Box>
      }
    >
      <Default />
    </Modal>
  );
};
