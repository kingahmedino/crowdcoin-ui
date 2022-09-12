import React from "react";
import { Box, Badge, Progress } from "@mantine/core";
const PanelData = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "transparent",
        padding: "16px",
        borderRadius: theme.radius.lg,
        cursor: "pointer",
        border: `1px solid #7EB4C5`,
        display: "flex",
        marginBottom: "20px", 
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
          Number of contributors
        </h3>
        <p style={{ color: "black", margin: 0, fontSize: 16 }}>30</p>
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
        <h3
          style={{
            margin: 0,
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "26px",
          }}
        >
          Amount Contributed
        </h3>
        <p style={{ color: "black", margin: 0, fontSize: 16 }}>30 ETH</p>
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
        <h3
          style={{
            margin: 0,
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "26px",
          }}
        >
          Withdrawal request amount
        </h3>
        <p style={{ color: "black", margin: 0, fontSize: 16 }}>200 ETH</p>
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
        <h3
          style={{
            margin: 0,
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "26px",
          }}
        >
          Reason for withdrawal
        </h3>
        <p style={{ color: "black", margin: 0, fontSize: 16 }}>
          Lawyers mobilization for arrested protesters
        </p>
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
        <h3
          style={{
            margin: 0,
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "26px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          Request Status
          <Badge style={{ marginLeft: 10 }} color="red" variant="filled">
            Rejected
          </Badge>
        </h3>
        <p style={{ color: "black", margin: 0, fontSize: 16 }}>
          16 contributors rejected this withdrawal request and this request has
          been denied.
        </p>
      </div>
      <Progress color="cyan" radius="md" size="md" value={0} />
    </Box>
  );
};

export default PanelData;
