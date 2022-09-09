import { AppShell, Navbar } from "@mantine/core";
import { Nav } from "../components/Nav";

export default function AppLayout({ Component, pageProps, router }) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed={false}
      padding="md"
      navbar={
        <Navbar  width={{ base: "248px" }} height={"100vh"} p="xs">
          <Nav />
        </Navbar>
      } 
    >
      <Component {...pageProps} />
    </AppShell>
  );
}
