import React from "react";
import { Box, List, ThemeIcon } from "@mantine/core";
import {
  IconCheck,
  IconCircleDashed,
  IconArrowUp,
  IconCircleX,
} from "@tabler/icons";
const OverallActivity = () => {
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
          Withdrawal Activity
        </h3>
        <p style={{ color: "#646F86", margin: 0, fontSize: 16 }}>Today</p>
        <List
          spacing="xl"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="red" size={24} radius="xl">
                <IconCircleX size={16} />
              </ThemeIcon>
            }
          >
            0x45Bc467... rejected your withdrawal request for GLA toke...
          </List.Item>{" "}
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconArrowUp size={16} />
              </ThemeIcon>
            }
          >
            You initiated a Withdrawal request of 10 ETH for End SARS...
          </List.Item>{" "}
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
        </List>
      </div>

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
        <p style={{ color: "#646F86", margin: 0, fontSize: 16 }}>Yesterday</p>
        <List
          spacing="xl"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          <List.Item>
            0x6870999... approved your withdrawal request of 10 ETH
          </List.Item>
          
        </List>
      </div>
    </Box>
  );
};

export default OverallActivity;
