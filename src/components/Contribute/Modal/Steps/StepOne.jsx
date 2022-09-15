import { Box, TextInput } from "@mantine/core";
import { TableDataContext } from "../../Table";
import { useContext } from "react";

const StepOne = ({ register, errors }) => {
  const { TableData } = useContext(TableDataContext);

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
        How much would you like to contribute?
      </Box>
      <Box
        sx={{
          margin: "0px",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "17px",
          color: "#646E86",

          marginBottom: "24px",
        }}
        component="p"
      >
        This campaign allows a minimum contribution of {TableData.Contribution}{" "}
        ETH
      </Box>
      <TextInput
        type={"number"}
        {...register("amount", { required: true })}
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
        placeholder={`You can contribute a minimum of ${TableData.Contribution} ETH for this campaign`}
      />
    </Box>
  );
};

export default StepOne;
