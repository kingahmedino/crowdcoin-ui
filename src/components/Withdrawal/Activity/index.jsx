import React from "react";
import { Box, List, ThemeIcon } from "@mantine/core";
import { IconCheck, IconCircleDashed } from "@tabler/icons";
const Activity = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "transparent",
        padding: "16px",
        borderRadius: theme.radius.lg,
        cursor: "pointer",
        border: `1px solid #7EB4C5`,
        display: "flex",
        flexDirection: "column",
        color: "#414E6B",
      })}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "26px",
          }}
        >
          Activity
        </h3>
        <p style={{ color: "#646F86", margin: 0, fontSize: 16 }}>Today</p>
      </div>
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item>0x6870999... approved your withdrawal request of 10 ETH</List.Item>
        <List.Item>0x6870999... approved your withdrawal request of 10 ETH</List.Item>
        <List.Item>0x6870999... approved your withdrawal request of 10 ETH</List.Item>
        <List.Item>0x6870999... approved your withdrawal request of 10 ETH</List.Item>

      </List>
    </Box>
  );
};

export default Activity;
