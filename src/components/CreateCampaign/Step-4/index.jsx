import { Box, Text, Textarea } from "@mantine/core";

export default function Step4({ errors, register }) {
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
          maxWidth: "290px",
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
        Campaign description
      </Box>
      <Text
        style={{
          maxWidth: "290px",
          width: "100%",
          margin: 0,
          marginBottom: "40px",
        }}
        size={24}
        color="#80889B"
      >
        Why are you creating this campaign?
      </Text>

      <Textarea
        minRows={4}
        required
        // style={{
        //   marginBottom: "58.6px",
        // }}
        styles={{
          input: {
            width: "100%",
            maxWidth: "565px",
            borderRadius: "16px",
            border: errors.campaignDescription
              ? "1px solid red"
              : "1px solid #7EB4C5",
            backgroundColor: "#F2f2f2",
            fontSize: "24px",
            marginBottom: errors.campaignDescription ? "0px" : "58.6px",
          },
        }}
        {...register("campaignDescription")}
      />
      {errors.campaignDescription ? (
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
