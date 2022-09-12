import React, { useState } from "react";
import { NavLink, createStyles } from "@mantine/core";
import {
  Logo,
  DashboardIcon,
  CampaignsIcon,
  WithdrawalIcon,
  DonationsIcon,
} from "../../shared/svg/";
import Link from "next/link";

import { useRouter } from "next/router";
export function Nav() {
  const [campaignsOpened, setCampaignsOpened] = useState(false);

  const useStyles = createStyles((theme) => ({
    nav: {
      height: "fit-content",
    },
    myCustomButton: {
      width: "208px",
      height: "57px",
      marginTop: "24px",
      marginLeft: "12px",
      padding: theme.spacing.xs,
      borderRadius: theme.radius.lg,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? "#2563EB" : "#2563EB",
        color: theme.white,
      },
    },
  }));

  const { classes } = useStyles();
  const router = useRouter();

  return (
    <>
      <Logo
        style={{
          width: "157px",
          height: "35px",
          marginLeft: "26px",
          marginTop: "56px",
          marginBottom: "16px",
        }}
      />

      <div className={classes.nav}>
        <Link href="/" passHref>
          <NavLink
            label="Dashboard"
            icon={<DashboardIcon />}
            className={classes.myCustomButton}
            active={router.pathname === "/"}
          />
        </Link>

        <NavLink
          label="Campaigns"
          icon={<CampaignsIcon />}
          className={classes.myCustomButton}
        >
          <Link href="/campaigns/myCampaigns" passHref>
            <NavLink
              active={router.pathname === "/campaigns/myCampaigns"}
              component="a"
              label="My Campaigns"
              variant="subtle"
            />
          </Link>
          <Link href="/campaigns/contribute" passHref>
            <NavLink
              active={router.pathname === "/campaigns/contribute"}
              component="a"
              label="Contribute to a campaign"
              variant="subtle"
            />
          </Link>
        </NavLink>

        <Link href="/withdrawals" passHref>
          <NavLink
            label="Withdrawals"
            icon={<WithdrawalIcon />}
            className={classes.myCustomButton}
          />
        </Link>

        <Link href="/contributions" passHref>
          <NavLink
            label="My Contributions"
            icon={<DonationsIcon />}
            className={classes.myCustomButton}
          />
        </Link>
      </div>
    </>
  );
}
