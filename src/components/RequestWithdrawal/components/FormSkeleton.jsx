import { Box, Text, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";

export default function FormSkeleton({
  title,
  description,
  value,
  formType,
  width,
  formData,
  setFormData,
  one,
  two,
  three,
  four,
}) {
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
          maxWidth: `${width}`,
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
        {title}
      </Box>
      <Text
        style={{
          maxWidth: `${width}`,
          width: "100%",
          margin: 0,
          marginBottom: "40px",
        }}
        size={24}
        color="#80889B"
      >
        {description}
      </Text>
      {formType === "input" ? (
        <TextInput
          value={value}
          style={{
            marginBottom: "40px",
          }}
          styles={{
            input: {
              width: "100%",
              maxWidth: "565px",
              height: "72px",
              borderRadius: "16px",
              border: "1px solid #7EB4C5",
              backgroundColor: "#F2f2f2",
              fontSize: "24px",
            },
          }}
          onChange={(e) => {
            one
              ? setFormData({ ...formData, campaignName: e.target.value })
              : two
              ? setFormData({ ...formData, validatorName: e.target.value })
              : three
              ? setFormData({ ...formData, minAmount: e.target.value })
              : four
              ? setFormData({
                  ...formData,
                  campaignDescription: e.target.value,
                })
              : null;
            console.log(formData);
          }}
        />
      ) : formType === "textarea" ? (
        <Textarea
          minRows={4}
          value={value}
          style={{
            marginBottom: "40px",
          }}
          styles={{
            input: {
              width: "100%",
              maxWidth: "565px",

              borderRadius: "16px",
              border: "1px solid #7EB4C5",
              backgroundColor: "#F2f2f2",
              fontSize: "24px",
            },
          }}
          onChange={(e) => {
            setFormData({ ...formData, campaignDescription: e.target.value });
          }}
        />
      ) : null}
    </Box>
  );
}
