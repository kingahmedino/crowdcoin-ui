import { Box, Text, TextInput } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";

export default function Step1({ errors, handleData }) {
  const data = [
    { campaign_name: "Campaign 1", amount_contributed: "0.5" },
    { campaign_name: "Campaign 2", amount_contributed: "0.5" },
    { campaign_name: "Campaign 3", amount_contributed: "0.5" },
    { campaign_name: "Campaign 4", amount_contributed: "0.5" },
  ];

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
