import { showNotification } from "@mantine/notifications";
import Link from "next/link";
import { Box, Button } from "@mantine/core";

export default function SuccessNotification(amount, name) {
  //   const FormData =
  //     typeof window !== "undefined" && localStorage.getItem("FormData");

  const message = () => {
    return (
      <Box
        sx={{
          color: "#16A34A",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "24px",
          width: "100%",
        }}
      >
        <Box>
          You have sucessfully contributed {amount} ETH to the Campaign {name} ,
          visit{" "}
          <Link href="https://etherscan.io" target="_blank">
            <a
              style={{
                color: "#16A34A",
                textDecoration: "underline",
              }}
            >
              etherscan
            </a>
          </Link>{" "}
          to check the detail of this transaction.
        </Box>
        <Link
          style={{
            marginTop: "20px",
          }}
          href="/contributions"
        >
          <Button
            sx={{
              width: "100%",
              marginTop: "20px",

              backgroundColor: "#16A34A",
              padding: "16px 24px",
              borderRadius: "16px",
              height: "58px",
              fontSize: "18.3672px",
              lineHeight: "20px",

              "&:hover": {
                backgroundColor: "#16A34A",
              },
            }}
          >
            View Your Contributions
          </Button>
        </Link>
      </Box>
    );
  };

  return showNotification({
    title: "Contribution Successful",
    message: message(),
    sx: {
      color: "#16A34A",
      backgroundColor: "rgba(134, 239, 172, 0.6)",
    },
    styles: {
      icon: {
        backgroundColor: "rgba(134, 239, 172, 0.6)",
        alignSelf: "flex-start",
      },
      title: {
        color: "#16A34A",
        fontWeight: 400,
        fontSize: 24,
        lineHeight: "26px",
      },

      root: {
        padding: "32px 16px",
        backgroundColor: "rgba(134, 239, 172, 0.6)",
        border: "1px solid #22c55e",
        borderRadius: 16,
        height: "auto",

        "&:before": {
          background: "rgba(134, 239, 172, 0.6)",
        },
      },
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill="#22C55E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7461 14.748L7.02427 11.6465C6.78995 11.4512 6.41005 11.4512 6.17574 11.6465C5.94142 11.8417 5.94142 12.1583 6.17574 12.3536L10.3757 15.8536C10.6301 16.0656 11.0496 16.0447 11.2718 15.809L17.8718 8.80893C18.0765 8.5918 18.0313 8.27747 17.7707 8.10686C17.5101 7.93626 17.133 7.97397 16.9282 8.19111L10.7461 14.748Z"
          fill="#DCFCE7"
        />
      </svg>
    ),
    disallowClose: true,
  });
}
