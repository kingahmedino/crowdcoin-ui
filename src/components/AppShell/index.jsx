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
  import { AsideComponent } from "../Aside";
  import NavigationHeader from "../NavigationHeader";
  import { AppProps } from "next/app";
  import Sidebar from "../Sidebar";
  import { useEffect, useState } from "react";
  import { useUser } from "@auth0/nextjs-auth0";
  
  export function AppShellComponent({ Component, pageProps, router }) {
    
    const { user, error, isLoading } = useUser();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

  
    return (
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        padding="md"
        navbar={router.route !== "/" && <Sidebar opened={opened}/>}
        header={<NavigationHeader />}
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 50, lg: 75 }}>
              <AsideComponent/>
            </Aside>
          </MediaQuery>
        }
      >
        <Component {...pageProps} />
      </AppShell>
    );
  }
  
  export default AppShellComponent;