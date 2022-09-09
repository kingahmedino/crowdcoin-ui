import {
  createStyles,
  Group,
  UnstyledButton,
  Text,
  Center,
  ScrollArea,
  TextInput,
  Table,
  Button,
} from "@mantine/core";
import React, { useState } from "react";
import { keys } from "@mantine/utils";
import Mockdata from "./data.json";
// import {
//   IconSelector,
//   IconChevronDown,
//   IconChevronUp,
//   IconSearch,
// } from "@tabler/icons";

import Moment from "react-moment";
import { ethers } from "ethers";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  th: {
    padding: 0,
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  icon: {
    width: 16,
    height: 16,
    borderRadius: 21,
  },
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

function Th({ children, reversed, sorted, onSort }) {
  const classes = useStyles();
  // const Icon = sorted
  //   ? reversed
  //     ? IconChevronUp
  //     : IconChevronDown
  //   : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton className={classes.control} onClick={onSort}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          {/* <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
          </Center> */}
        </Group>
      </UnstyledButton>
    </th>
  );
}

const data = Mockdata.data;

function filterData(data, search) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(data, payload) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const DashbordTable = () => {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(() => sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <tr key={row.id}>
      <td>{row.name}</td>
      <td>{row.validator}</td>
      <td>{row.address.slice(0, 9) + "..."}</td>
      <td>
        <Moment fromNow>{row.created_at}</Moment>
      </td>
      <td
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{ethers.utils.formatUnits(row.min_amount)} ETH</p>{" "}
        <Link href="/">
          <a>View</a>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <h3>Popular Campaigns</h3>
      <TextInput
        placeholder="Search campaign, validator or campaign link"
        mb="md"
        value={search}
        onChange={handleSearchChange}
      />
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) => setScrolled(() => y !== 0)}
      >
        <Table
          horizontalSpacing="md"
          verticalSpacing="xs"
          sx={{ minWidth: 700 }}
          striped
          highlightOnHover
        >
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <Th
                sorted={sortBy === "name"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("name")}
              >
                Campaign Name
              </Th>
              <Th
                sorted={sortBy === "validator"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("validator")}
              >
                Validator
              </Th>
              <Th
                sorted={sortBy === "address"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("address")}
              >
                Escrow Address
              </Th>
              <Th
                sorted={sortBy === "created_at"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("created_at")}
              >
                Created
              </Th>
              <Th
                sorted={sortBy === "min_amount"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("min_amount")}
              >
                Minimum Amount
              </Th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={Object.keys(data[0]).length}>
                  <Text weight={500} align="center">
                    Nothing found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default DashbordTable;
