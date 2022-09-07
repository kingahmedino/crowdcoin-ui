import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";


export default function AppLayout({  Component, pageProps, router }) {
  return (
    <AppShell
     
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      padding="md"
      navbar={<nav></nav>}
      header={<div></div>}
      aside={
        <div></div>
      }
    >
      <Component {...pageProps} />
    </AppShell>
  );
}
