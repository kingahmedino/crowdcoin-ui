import { Box } from "@mantine/core";
import { TableDataContext } from "../../Table/index";
import { useContext } from "react";

export const Default = () => {
  const TableData = useContext(TableDataContext);

  const ObjToArr = [
    // TableData.CampaignName,
    // TableData.ValidatorName,
    // TableData.ValidatorAddress,
    // TableData.EscrowAddress,
    // TableData.Contribution,
    {
      name: "Escrow Address",
      value: TableData.EscrowAddress,
    },
    {
      name: "Validator Address",
      value: TableData.ValidatorAddress,
    },
    {
      name: "Minimum Contribution",
      value: `${TableData.Contribution} ETH`,
    },
    {
      name: "Campaign Description",
      value: "Description",
    },
  ];
  console.log(ObjToArr);

  return (
    <Box>
      <Box
        sx={{
          margin: "0",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "17px",
          color: "#646E86",
        }}
        component="p"
      >
        Validator: {TableData.ValidatorName}
      </Box>
      <Box>
        {ObjToArr.map((item, index) => (
          <Box key={index}>
            <Box component="p">{item.name}</Box>
            <Box component="p">{item.value}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
