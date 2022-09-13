import { Box, Text, TextInput } from "@mantine/core";

export default function Step2({ errors, register }) {
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
        Validator Name
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
        Who is creating this campaign?
      </Text>

      <TextInput
        required
        style={{
          marginBottom: !errors.validatorName ? "58.6px" : "0px",
        }}
        styles={{
          input: {
            width: "100%",
            maxWidth: "565px",
            height: "72px",
            borderRadius: "16px",
            border: errors.validatorName
              ? "1px solid red"
              : "1px solid #7EB4C5",
            backgroundColor: "#F2f2f2",
            fontSize: "24px",
          },
        }}
        {...register("validatorName")}
      />
      {errors.validatorName ? (
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
