import Step1 from "../../src/components/RequestWithdrawal/Step-1";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { LeftArrowIcon } from "../../src/components/RequestWithdrawal/LeftArrow";
import WithdrawModal from "../../src/components/RequestWithdrawal/WithdrawModal";


const CreateCampaign = () => {
  const [step, setStep] = useState(0);

  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Modal State
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (campaignData) {
      console.log(campaignData);
      setOpened(true);
    }
  }, [campaignData]);

  return (
    <>
      <Step1
        handleData={(data) => {
          setCampaignData(data);
        }}
      />
      <WithdrawModal
        campaignData={campaignData}
        opened={opened}
        onClose={() => setOpened(() => false)}
      />
    </>
  );
};

export default CreateCampaign;
