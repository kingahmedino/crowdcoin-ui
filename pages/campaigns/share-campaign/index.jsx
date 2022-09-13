import { Box, CopyButton, TextInput, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ShareCampaign() {
  const [link, setLink] = useState("https://www.google.com/");

  const router = useRouter();
  setTimeout(() => {
    router.push("/campaigns/myCampaigns");
  }, 20000);

  useEffect(() => {
    setTimeout(() => {
      alert("You will be redirected to My Campaigns page in 20 seconds ");
    }, 1000);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          fontWeight: "400",
          fontSize: "48px",
          lineHeight: "52px",
          margin: "0",
          marginTop: "57px",
          marginBottom: "48px",
        }}
        component="h2"
      >
        Congratulations 🎉
      </Box>
      <TextInput
        styles={{
          input: {
            maxWidth: "796px",
            width: "100%",
            height: "74px",
            fontSize: "24px",
            backgroundColor: "#F2f2f2",
            borderRadius: "16px",
            border: "1px solid #7eb4c5",
            paddingLeft: "31.6px",
            color: "#80889B",
          },
        }}
        value={link}
        disabled
      />
      <Box
        sx={{
          margin: "0",
          marginTop: "40px",
          marginBottom: "40px",
          maxWidth: "503px",
          width: "100%",
          lineHeight: "26px",
          fontSize: "24px",
          fontWeight: "400",
          color: "#80889B",
        }}
        component="p"
      >
        You have successfully created a new campaign. You can share your
        campaign link on social platforms for awareness
      </Box>
      <CopyButton value={link}>
        {({ copied, copy }) => (
          <Button
            sx={{
              maxWidth: "224px",
              width: "100%",
              borderRadius: "16px",
              backgroundColor: copied ? "teal" : "#2563EB",
              padding: "16px 24px",
              height: "auto",
              fontSize: "24px",
            }}
            color={copied ? "teal" : "#2563EB"}
            onClick={copy}
          >
            {copied ? "Copied" : "Copy link"}
          </Button>
        )}
      </CopyButton>
      <Box></Box>
    </Box>
  );
}

export default React.memo(ShareCampaign);
