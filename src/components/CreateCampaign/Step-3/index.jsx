import { Box, Text, TextInput } from "@mantine/core";

export default function Step3({ errors, register }) {
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
          maxWidth: "380px",
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
        Minimum amount accepted
      </Box>
      <Text
        style={{
          maxWidth: "380px",
          width: "100%",
          margin: 0,
          marginBottom: "40px",
        }}
        size={24}
        color="#80889B"
      >
        What is the minimum amount this campaign should accept?
      </Text>

      <TextInput
        required
        // style={{
        //   marginBottom: "58.6px",
        // }}
        styles={{
          input: {
            width: "100%",
            maxWidth: "565px",
            height: "72px",
            borderRadius: "16px",
            border: errors.minAmount ? "1px solid red" : "1px solid #7EB4C5",
            backgroundColor: "#F2f2f2",
            fontSize: "24px",
            marginBottom: errors.minAmount ? "0px" : "58.6px",
          },
        }}
        {...register("minAmount")}
      />
      {errors.minAmount ? (
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
