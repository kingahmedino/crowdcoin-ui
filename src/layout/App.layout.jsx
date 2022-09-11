import { AppShell, Navbar, Header } from "@mantine/core";
import { Nav } from "../components/Nav";
import ConnectWallet from "../components/ConnectWallet/ConnectWallet";
export default function AppLayout({ Component, pageProps, router }) {
  console.log(router);
  const { pathname } = router;

  const Name =
    pathname === "/"
      ? "Dashboard"
      : pathname.includes("campaign")
      ? "Campaigns"
      : pathname.includes("withdrawal")
      ? "Withdrawals"
      : pathname.includes("contribution")
      ? "My Contributions"
      : "Dashboard";

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed={false}
      header={
        <Header
          height={136}
          style={{
            display: "flex",
            border: "none",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            backgroundColor: "#f2f2f2",
            paddingTop: "56px",
          }}
          p="xs"
        >
          <h1
            style={{
              marginLeft: "248px",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "44px",
              color: "#040404",
            }}
          >
            {Name}
          </h1>
          <ConnectWallet />
        </Header>
      }
      navbar={
        <Navbar width={{ base: "248px" }} height={"100vh"} p="xs">
          <Nav />
        </Navbar>
      }
      styles={{
        main: {
          padding: 0,
          overflowY: "scroll",
          paddingTop: 136,
          paddingLeft: 32,
          paddingRight: 32,
          backgroundColor: "rgba(242, 242, 242, 1)",
          height: "100vh",
        },
      }}
    >
      <Component {...pageProps} />
    </AppShell>
  );
}
