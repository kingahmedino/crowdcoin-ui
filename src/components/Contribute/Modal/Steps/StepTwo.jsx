import { Box, TextInput } from "@mantine/core";

const StepTwo = ({ register }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          margin: "0px",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "17px",
          color: "#646E86",
          marginBottom: "32px",
        }}
        component="p"
      >
        You are about to contribute to this campaign
      </Box>
      <Box
        sx={{
          margin: "0px",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "26px",
          marginBottom: "16px",
        }}
        component="h3"
      >
        Enter your email
      </Box>
      <Box
        sx={{
          margin: "0px",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "17px",
          color: "#646E86",
          maxWidth: "508px",
          width: "100%",
          marginBottom: "24px",
        }}
        component="p"
      >
        To get notified on a new withdrawal request from this campaign, enter
        your email address
      </Box>
      <TextInput
        {...register("email", { required: true })}
        styles={{
          input: {
            border: "1.14795px solid #7EB4C5",
            borderRadius: "16px",
            height: "74px",
            fontSize: "12px",
            lineHeight: "13px",
            fontWeight: "400",
            color: "#646E86",
            paddingLeft: "24px",
          },
        }}
        placeholder="Enter a valid email address"
      />
    </Box>
  );
};

export default StepTwo;
