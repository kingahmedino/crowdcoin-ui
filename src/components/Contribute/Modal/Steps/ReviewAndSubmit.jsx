import { Box } from "@mantine/core";
import { TableDataContext } from "../../Table";
import { useContext } from "react";

const ReviewAndSubmit = () => {
  const { TableData } = useContext(TableDataContext);
  const contributeData = JSON.parse(localStorage.getItem("contributeData"));

  const ObjToArr = [
    {
      name: "Campaign name",
      value: TableData.CampaignName,
    },
    {
      name: "Validator name",
      value: TableData.ValidatorName,
    },
    {
      name: "Amount to be contributed",
      value: `${contributeData.amount} ETH`,
    },
    {
      name: "Email",
      value: contributeData.email,
    },
  ];

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
        Review
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

export default ReviewAndSubmit;
