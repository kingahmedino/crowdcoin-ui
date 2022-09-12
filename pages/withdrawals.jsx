import { Tabs } from "@mantine/core";
import WithdrawalComponent from "../src/components/Withdrawal/index.jsx";
import Activity  from "../src/components/Withdrawal/Activity/index.jsx";

export default function Withdrawals() {
  return (
    <div style={{display: "flex"}}>
      <Tabs
        unstyled
        styles={(theme) => ({
          tab: {
            ...theme.fn.focusStyles(),
            backgroundColor: "transparent",
            border: "none",
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
            cursor: 'pointer',
            fontSize: theme.fontSizes.md,
            marginRight: theme.spacing.xl,
            display: 'flex',
            alignItems: 'center',
  
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed',
            },
  
            '&:not(:first-of-type)': {
              borderLeft: 0,
            },
 
  
            '&[data-active]': {
              color: "#2563EB",
            },
          },
  
          tabIcon: {
            marginRight: theme.spacing.xs,
            display: 'flex',
            alignItems: 'center',
          },
  
          tabsList: {
            display: 'flex',
            marginBottom: theme.spacing.md,
          },
        })}
        defaultValue="all"
      >
        <Tabs.List>
          <Tabs.Tab value="all">All withdrawals</Tabs.Tab>
          <Tabs.Tab value="current">Current withdrawals</Tabs.Tab>
          <Tabs.Tab value="approved">Approved withdrawals</Tabs.Tab>
          <Tabs.Tab value="denied">Denied withdrawals</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all" pt="xs">
          <WithdrawalComponent value="all" />
        </Tabs.Panel>

        <Tabs.Panel value="current" pt="xs">
          <WithdrawalComponent value="current" />
        </Tabs.Panel>

        <Tabs.Panel value="approved" pt="xs">
          <WithdrawalComponent value="approved" />
        </Tabs.Panel>

        <Tabs.Panel value="denied" pt="xs">
          <WithdrawalComponent value="denied" />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
