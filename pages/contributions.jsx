import { Tabs } from "@mantine/core";
import WithdrawalComponent from "../src/components/Withdrawal/index.jsx";

export default function Contributions() {
  return (
    <>
      <Tabs defaultValue="all">
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
    </>
  );
}
