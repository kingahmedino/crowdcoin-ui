import {
  Button,
  Modal,
  Box,
  Notification,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  amount: yup.string().required("Amount is required"),
  destinationAddress: yup.string().required("Destination Address is required"),
  withdrawalReason: yup.string().required("Withdrawal Reason is required"),
});

const WithdrawModal = ({
  opened,
  onClose,
  campaignData,
  setWithDrawalData,
}) => {
  const [loading, setLoading] = useState(false);
  // Keep Track of Form Data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    try {
      setLoading(() => true);
      onClose();
      setLoading(() => false);
      setWithDrawalData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      padding={37}
      opened={opened}
      centered
      size={912}
      title="Request withdrawal"
      onClose={onClose}
      closeOnClickOutside={onClose}
      overlayColor="rgba(139, 193, 209, 0.4)"
      styles={{
        modal: {
          borderRadius: 16,
          boxShadow: "8px 10px 24px rgba(37, 99, 235, 0.1)",
          padding: 32,
          margin: 0,
        },
        title: {
          fontSize: 32,
          lineHeight: "35px",
          fontWeight: 400,
          color: "#040404",
        },
        header: {
          margin: 0,
          marginBottom: 16,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box
            sx={{
              margin: "0 ",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "17px",
              color: "#646E86",
              marginBottom: "32px",
            }}
            component="p"
          >
            You are about to request for a withdrawal from the {campaignData?.campaign_name} campaign.
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",
                margin: 0,
              }}
              component="p"
            >
              How much do you wish to withdraw?
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
              <TextInput
                required
                style={{
                  marginBottom: !errors.validatorName ? "58.6px" : "0px",
                }}
                placeholder="Total amount withdrawable for this campaign is 70 ETH"
                error={errors?.amount ? true : false}
                styles={{
                  input: {
                    marginTop: "16px",
                    width: "100%",
                    height: "72px",
                    borderRadius: "16px",
                    border: errors.validatorName
                      ? "1px solid red"
                      : "1px solid #7EB4C5",
                    backgroundColor: "#F2f2f2",
                    fontSize: "24px",
                  },
                }}
                {...register("amount")}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",

              width: "100%",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",

                margin: 0,
              }}
              component="p"
            >
              Destination address
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
              <TextInput
                required
                style={{
                  marginBottom: !errors.validatorName ? "58.6px" : "0px",
                }}
                error={errors?.destinationAdress ? true : false}
                placeholder="Enter address"
                styles={{
                  input: {
                    marginTop: "16px",
                    width: "100%",
                    height: "72px",
                    borderRadius: "16px",
                    border: errors.validatorName
                      ? "1px solid red"
                      : "1px solid #7EB4C5",
                    backgroundColor: "#F2f2f2",
                    fontSize: "24px",
                  },
                }}
                {...register("destinationAddress")}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",

                margin: 0,
              }}
              component="p"
            >
              Reason for withdrawal?
            </Box>
            <Box
              sx={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "17px",
                fontWeight: "400",
                color: "#646E86",
              }}
              component="p"
            >
              <Textarea
                required
                placeholder="Enter reason for withdrawal..."
                style={{
                  marginBottom: !errors.validatorName ? "58.6px" : "0px",
                }}
                error={errors?.withdrawalReason ? true : false}
                styles={{
                  input: {
                    marginTop: "16px",
                    width: "100%",
                    height: "252px",
                    borderRadius: "16px",
                    border: errors.validatorName
                      ? "1px solid red"
                      : "1px solid #7EB4C5",
                    backgroundColor: "#F2f2f2",
                    fontSize: "24px",
                  },
                }}
                {...register("withdrawalReason")}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",

              width: "100%",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={onClose}
              sx={{
                padding: "16px 24px",
                borderRadius: "16px",
                backgroundColor: "#fff",
                height: "auto",
                fontWeight: "400",
                fontSize: "18.3672px",
                lineHeight: "20px",
                color: "#2563EB",
                border: "1px solid #2563EB",
                width: "100%",
                maxWidth: "214px",
              }}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              loading={loading}
              sx={{
                marginLeft: "24px",
                padding: "16px 24px",
                borderRadius: "16px",
                backgroundColor: "#2563EB",
                height: "auto",
                fontWeight: "400",
                fontSize: "18.3672px",
                lineHeight: "20px",
                color: "#FFFFFF",
                maxWidth: loading ? "214px" : "auto",
              }}
            >
              Request Withdrawal
            </Button>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default WithdrawModal;
