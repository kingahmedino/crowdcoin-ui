import { Box, Text, TextInput } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

export default function Step1({ errors, register }) {
  return (
    <Box
      sx={{
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
        Campaign name
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
        What would you like to call this campaign?
      </Text>

      <TextInput
        style={{
          marginBottom: !errors.campaignName ? "58.6px" : "0px",
        }}
        styles={{
          input: {
            width: "100%",
            maxWidth: "565px",
            height: "72px",
            borderRadius: "16px",
            border: errors.campaignName ? "1px solid red" : "1px solid #7EB4C5",
            backgroundColor: "#F2f2f2",
            fontSize: "24px",
          },
        }}
        {...register("campaignName", { required: true })}
      />
      {errors.campaignName ? (
        <Text
          style={{
            margin: 0,
            marginBottom: "40px",
          }}
          size="xs"
          color="red"
          weight={700}
        >
          This field is required
        </Text>
      ) : null}
    </Box>
  );
}
