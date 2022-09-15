import React from 'react'
import { Box } from "@mantine/core";
import Link from "next/link";
const Card = (data, type) => {
  return (
    
    <Link href="/withdrawals/request_withdrawal/">
    <Box
    sx={(theme) => ({
      backgroundColor: "transparent",
      textAlign: "center",
      padding: "16px 40px",
      padding: "16px",
      paddingRight: "40px",
      paddingLeft: "50px",
      borderRadius: theme.radius.lg,
      cursor: "pointer",
      border: `1px solid #7EB4C5`,
      width: "564px",
      height: "91px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
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
        width: "276px",
        height: "26px",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "26px",
      }}
    >
      Request a new withdrawal
    </h3>
  </Box>
          </Link>
  )
}

export default Card