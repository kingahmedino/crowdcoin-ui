import React from "react";
import { Box } from "@mantine/core";
import Link from "next/link";

const Card = ({
  data: { campaign_name, amount_contributed },
  selected,
  onPress,
}) => {
  return (
    <>
      <Box
        onClick={onPress}
        component="button"
        sx={(theme) => ({
          backgroundColor: "transparent",
          paddingTop: "0",
          paddingBottom: "0",
          paddingRight: "40px",
          paddingLeft: "50px",
          borderRadius: theme.radius.lg,
          cursor: "pointer",
          border: `1px solid #7EB4C5`,
          width: "564px",
          height: "91px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "20px",
          color: "#2563EB",
          "&:hover": {
            backgroundColor: ` #2563EB`,
            color: "white",
          },
        })}
      >
        <h3
          style={{
            fontWeight: "400",
            fontSize: "24px",
            margin: "0",
          }}
        >
          {campaign_name}
        </h3>
        <p style={{ color: "black", margin: 0, fontSize: 16 }}>
          {amount_contributed} ETH
        </p>
      </Box>
    </>
  );
};

export default Card;
