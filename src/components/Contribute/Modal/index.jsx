import { Button, Modal } from "@mantine/core";
import { useContext, useState } from "react";
import { Default } from "./Steps/Default";
import { TableDataContext } from "../Table";
import Verified from "../Table/Verified";
import { Box } from "@mantine/core";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReviewAndSubmit from "./Steps/ReviewAndSubmit";
import SuccessNotification from "./SuccessNotification";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  amount: yup.string().required("Amount is required"),
});

export const ContributeModal = ({ open, close }) => {
  const { TableData, stepState } = useContext(TableDataContext);
  console.log(TableData);
  const [step, setStep] = stepState;

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Default />;
      case 1:
        return <StepOne register={register} errors={errors} />;
      case 2:
        return <StepTwo register={register} errors={errors} />;
      case 3:
        return <ReviewAndSubmit />;
      case 4:
        return <ReviewAndSubmit />;
      default:
        return <ReviewAndSubmit />;
    }
  };

  async function handleStepChange() {
    let isValid = false;

    switch (step) {
      case 0:
        isValid = true;
        break;
      case 1:
        isValid = await trigger("amount");
        break;
      case 2:
        isValid = await trigger("email");
        const values = getValues();
        localStorage.setItem("contributeData", JSON.stringify(values));
        break;

      default:
        break;
    }
    if (isValid) {
      setStep((step) => step + 1);
      if (step > 3) {
        setStep(() => 3);
      }
    }
  }

  const onSubmit = (data) => {
    if (step === 3) {
      try {
        setLoading(() => true);
        setTimeout(() => {
          if (typeof window !== undefined) {
            localStorage.setItem(
              "FormData",
              JSON.stringify({
                ...data,
                CampaignName: TableData.CampaignName,
                ValidatorName: TableData.ValidatorName,
              })
            );
          }
          setLoading(() => false);
          reset();
          close();
          SuccessNotification(data.amount, TableData.CampaignName);
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log("step", step);

  return (
    <Modal
      padding={37}
      size={869}
      centered
      closeOnClickOutside={false}
      overlayColor="rgba(139, 193, 209, 0.4)"
      styles={{
        title: {
          fontSize: "32px",
          fontWeight: "400",
          lineHeight: "35px",
          maxWidth: "500px",
          width: "100%",
          color: "#040404",
        },
        modal: {
          borderRadius: "16px",
          boxShadow: "8px 10px 24px rgba(37, 99, 235, 0.1)",
          padding: 32,
          margin: 0,
        },
        close: {
          borderRadius: "50%",
          backgroundColor: " rgba(139, 193, 209, 0.4)",
          "&:hover": {
            backgroundColor: " rgba(139, 193, 209, 0.9)",
          },
        },
      }}
      opened={open}
      onClose={close}
      title={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {step < 3 ? (
            <>
              <Box
                sx={{
                  marginRight: "4px",
                }}
              >
                {" "}
                {TableData.CampaignName}
              </Box>{" "}
              <Verified />{" "}
            </>
          ) : (
            <>Review</>
          )}
        </Box>
      }
    >
      {step > 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderStep()}
          <Box
            sx={{
              display: step < 3 ? "block" : "flex",
              justifyContent: "flex-end",
              marginTop: "32px",
            }}
          >
            {step < 3 ? (
              <Button
                onClick={handleStepChange}
                sx={{
                  width: "100%",
                  backgroundColor: "#2563EB",
                  padding: "16px 24px",

                  height: "64px",
                  fontSize: "18.3672px",
                  lineHeight: "20px",
                  fontWeight: "400",
                  borderRadius: "16px",
                }}
              >
                Continue
              </Button>
            ) : (
              <>
                <Button
                  onClick={close}
                  variant="outline"
                  sx={{
                    marginRight: "16px",
                    color: "#2563EB",
                    borderColor: "#2563EB",
                    padding: "16px 24px",
                    maxWidth: "214px",
                    width: "100%",
                    height: "64px",
                    fontSize: "18.3672px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    borderRadius: "16px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  //   onClick={handleStepChange}
                  loading={loading}
                  sx={{
                    backgroundColor: "#2563EB",
                    padding: "16px 24px",
                    maxWidth: "214px",
                    width: "100%",
                    height: "64px",
                    fontSize: "18.3672px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    borderRadius: "16px",
                  }}
                >
                  Contribute
                </Button>
              </>
            )}
          </Box>
        </form>
      ) : (
        <>
          {renderStep()}
          <Box
            sx={{
              display: step > 0 ? "block" : "flex",
              justifyContent: "flex-end",
              marginTop: "32px",
            }}
          >
            <Button
              variant="outline"
              sx={{
                marginRight: "16px",
                color: "#dc2626",
                borderColor: "#dc2626",
                padding: "16px 24px",
                maxWidth: "214px",
                width: "100%",
                height: "64px",
                fontSize: "18.3672px",
                lineHeight: "20px",
                fontWeight: "400",
                borderRadius: "16px",
              }}
            >
              Report
            </Button>
            <Button
              onClick={handleStepChange}
              sx={{
                backgroundColor: "#2563EB",
                padding: "16px 24px",
                maxWidth: "214px",
                width: "100%",
                height: "64px",
                fontSize: "18.3672px",
                lineHeight: "20px",
                fontWeight: "400",
                borderRadius: "16px",
              }}
            >
              Contribute
            </Button>
          </Box>
        </>
      )}
    </Modal>
  );
};
