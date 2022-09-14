import Step1 from "../../src/components/RequestWithdrawal/Step-1";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mantine/core";
import { LeftArrowIcon } from "../../src/components/RequestWithdrawal/LeftArrow";
import WithdrawModal from "../../src/components/RequestWithdrawal/WithdrawModal";
import ConfirmationModal from "../../src/components/RequestWithdrawal/ConfirmationModal";

const CreateCampaign = () => {
  const [step, setStep] = useState(0);
  const [withDrawalData, setWithDrawalData] = useState(null);
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Modal State
  const [opened, setOpened] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
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
        setWithDrawalData={setWithDrawalData}
        onClose={() => {
          setOpened(() => false);
          setOpenConfirmationModal(true);
        }}
      />
      <ConfirmationModal
        campaignData={campaignData}
        opened={openConfirmationModal}
        withDrawalData={withDrawalData}
        onClose={() => setOpenConfirmationModal(() => false)}
      />
    </>
  );
};

export default CreateCampaign;
