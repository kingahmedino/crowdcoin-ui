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
      name: "Escrow address",
      value: TableData.EscrowAddress,
    },
    {
      name: "Validator address",
      value: TableData.ValidatorAddress,
    },
    {
      name: "Minimum dontribution",
      value: `${TableData.Contribution} ETH`,
    },
    {
      name: "Campaign description",
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
          marginBottom: "32px",
        }}
        component="p"
      >
        Validator: {TableData.ValidatorName}
      </Box>
      <Box
        sx={{
          border: "1px solid #7EB4C5",
          borderRadius: "16px",
          padding: "24px",
          color: "#040404",
        }}
      >
        {ObjToArr.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-between",
              height: "55px",
              marginBottom: "40px",
            }}
            key={index}
          >
            <Box
              sx={{
                margin: 0,
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",
                marginBottom: "8px",
              }}
              component="p"
            >
              {item.name}
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
              {item.value}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
