import Card from "./Card";
import PanelData from "./PanelData";
import { Tabs } from "@mantine/core";
import Activity from "./Activity";
import OverallActivity from "./Activity/OverallActivity";
export default function WithdrawalComponent({ value }) {
  return (
    <>
      <Tabs
      defaultValue="1"
        unstyled
        styles={(theme) => ({
          root: {
            display: "flex",
            flexDirection: "row",
          },
          tab: {
            backgroundColor: "transparent",
            textAlign: "center",
            padding: "16px",
            paddingRight: "40px",
            paddingLeft: "50px",
            borderRadius: "16px",
            cursor: "pointer",
            border: `1px solid #7EB4C5`,
            width: "564px",
            height: "91px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
            fontWeight: "400",
            fontSize: "24px",
            color: "#040404",
            "&:disabled": {
              opacity: 0.5,
              cursor: "not-allowed",
            },

            "&:last-of-type": {
              borderTopRightRadius: theme.radius.md,
              borderBottomRightRadius: theme.radius.md,
            },

            "&[data-active]": {
              backgroundColor: "#2563EB",
              borderColor: "#2563EB",
              color: theme.white,
            },
          },

          tabsList: {
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
          },

          panel: {
            marginLeft: "20px",
            fontSize: theme.fontSizes.md,
            backgroundColor: "transparent",
            width: "564px",
          },
        })}
      >
        <Tabs.List>
          <Card />
          <Tabs.Tab value="2">End Sars Movement</Tabs.Tab>
          <Tabs.Tab value="3">End Sars Movement</Tabs.Tab>
          <Tabs.Tab value="4">End Sars Movement</Tabs.Tab>
          <Tabs.Tab value="5">End Sars Movement</Tabs.Tab>
          <Tabs.Tab value="6">End Sars Movement</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="1">
          <OverallActivity />
        </Tabs.Panel>

        <Tabs.Panel value="2">
          <PanelData /> <Activity />
        </Tabs.Panel>

        <Tabs.Panel value="3">
          <PanelData /> <Activity />
        </Tabs.Panel>
        <Tabs.Panel value="4">
          <PanelData /> <Activity />
        </Tabs.Panel>
        <Tabs.Panel value="5">
          <PanelData /> <Activity />
        </Tabs.Panel>
        <Tabs.Panel value="6">
          <PanelData /> <Activity />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
