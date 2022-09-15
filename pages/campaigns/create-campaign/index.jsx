import Step1 from "../../../src/components/CreateCampaign/Step-1";
import Step2 from "../../../src/components/CreateCampaign/Step-2";
import Step3 from "../../../src/components/CreateCampaign/Step-3";
import Step4 from "../../../src/components/CreateCampaign/Step-4";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { LeftArrowIcon } from "../../../src/components/CreateCampaign/LeftArrow";
import CampaignModal from "../../../src/components/CreateCampaign/CampaignModal";

const CreateCampaign = () => {
  const [step, setStep] = useState(0);

  const myData =
    typeof window !== "undefined" && localStorage.getItem("campaignData")
      ? JSON.parse(localStorage.getItem("campaignData"))
      : {};

  const [campaignData, setCampaignData] = useState(myData);
  const [loading, setLoading] = useState(false);

  // Modal State
  const [opened, setOpened] = useState(false);

  // Keep Track of Form Data
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const renderSteps = () => {
    switch (step) {
      case 0:
        return <Step1 errors={errors} register={register} />;
      case 1:
        return <Step2 errors={errors} register={register} />;
      case 2:
        return <Step3 errors={errors} register={register} />;
      case 3:
        return <Step4 errors={errors} register={register} />;
      default:
        return <Step4 register={register} errors={errors} />;
    }
  };

  async function handleStepChange() {
    let isValid = false;

    switch (step) {
      case 0:
        isValid = await trigger("campaignName");
        break;
      case 1:
        isValid = await trigger("validatorName");
        break;
      case 2:
        isValid = await trigger("minAmount");
        break;
      case 3:
        isValid = await trigger("campaignDescription");
    }
    if (isValid) {
      setStep(() => step + 1);
      if (step > 3) {
        setStep(() => 3);
      }
    }

    console.log("step", step);
  }

  function onSubmit(data) {
    if (step === 3) {
      try {
        setLoading(() => true);
        setTimeout(() => {
          setCampaignData(() => data);
          if (typeof window !== "undefined") {
            localStorage.setItem("campaignData", JSON.stringify(data));
          }
          setOpened(() => true);
          setLoading(() => false);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (step > 3) {
      setStep(() => 3);
    }
  }, [step]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 ? null : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              backgroundColor: "transparent",
              width: "100%",
              maxWidth: "100px",
              margin: 0,
              cursor: "pointer",
              marginBottom: "24px",
            }}
            component="button"
            onClick={() => {
              setStep(() => {
                if (step > 0) {
                  return step - 1;
                }
                return 0;
              });
            }}
          >
            <LeftArrowIcon />
            <Box
              sx={{
                fontSize: "24px",
                lineHeight: "26px",
                fontWeight: "400",
                color: "#80889B",
              }}
              component="span"
            >
              Back
            </Box>
          </Box>
        )}

        <Box
          sx={{
            margin: "0 ",
            marginBottom: "64px",
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "35px",
            color: "#80889B",
          }}
          component="h2"
        >
          Step {step === 0 ? 1 : step + 1} of 4
        </Box>
        {renderSteps()}

        {step < 3 ? (
          <Button
            sx={{
              maxWidth: "214px",
              width: "100%",
              borderRadius: "16px",
              backgroundColor: "#2563EB",
              padding: "16px 24px",
              height: "auto",
              fontSize: "24px",
              lineHeight: "26px",
              fontWeight: "400",
            }}
            onClick={handleStepChange}
          >
            Continue
          </Button>
        ) : (
          <Button
            loading={loading}
            sx={{
              maxWidth: loading ? "280px" : "240px",
              width: "100%",
              borderRadius: "16px",
              backgroundColor: "#2563EB",
              padding: "16px 24px",
              height: "auto",
              fontSize: "24px",
              lineHeight: "26px",
              fontWeight: "400",
            }}
            // onClick={handleStepChange}
            type="submit"
          >
            Create Campaign
          </Button>
        )}
      </form>
      <CampaignModal
        reset={reset}
        opened={opened}
        onClose={() => setOpened(() => false)}
      />
    </>
  );
};

export default CreateCampaign;
