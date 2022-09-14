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
} from '@mantine/core'
import React, { useState } from 'react'
import { keys } from '@mantine/utils'
import Mockdata from './data.json'
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from '@tabler/icons'

import Moment from 'react-moment'
import { ethers, BigNumber } from 'ethers'
import Link from 'next/link'
import styles from '../../../shared/styles/Dashboard.module.css'

const useStyles = createStyles((theme) => ({
  th: {
    padding: 0,
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
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
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#2563EB',
    transition: 'box-shadow 150ms ease',
    height: '45px',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))

function Th({ children, reversed, sorted, onSort }) {
  const classes = useStyles()
  // const Icon = sorted
  //   ? reversed
  //     ? IconChevronUp
  //     : IconChevronDown
  //   : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton className={classes.control} onClick={onSort}>
        <Group position="apart">
          <Text
            color="white"
            weight={500}
            size={12}
            style={{
              lineHeight: '13px',
            }}
          >
            {children}
          </Text>
          {/* <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
          </Center> */}
        </Group>
      </UnstyledButton>
    </th>
  )
}

// const data = Mockdata.data

// function filterData(data, search) {
//   const query = search.toLowerCase().trim()
//   console.log(query)
//   return data.filter((item) => {
//     console.log(item)

//     keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
//   })
// }

// function sortData(data, payload) {
//   const { sortBy } = payload

//   if (!sortBy) {
//     return filterData(data, payload.search)
//   }

//   return filterData(
//     [...data].sort((a, b) => {
//       if (payload.reversed) {
//         return b[sortBy].localeCompare(a[sortBy])
//       }

//       return a[sortBy].localeCompare(b[sortBy])
//     }),
//     payload.search,
//   )
// }

const DashbordTable = (props) => {
  let data = props.data.map((b) => {
    let obj = {}
    obj.name = b['6']
    obj.validator = b['7']
    obj.address = b['10']
    obj.created_at = ethers.utils.formatEther(b['5']) * 1e18
    obj.min_amount = b['0']
    obj.balance = b['1']
    obj.total_contributed = b['2']
    obj.request_count = b['3']
    obj.contributor_count = b['4']
    obj.creator = b['9']
    obj.description = b['8']

    return obj
  })

  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  // const setSorting = (field) => {
  //   const reversed = field === sortBy ? !reverseSortDirection : false
  //   setReverseSortDirection(reversed)
  //   setSortBy(field)
  //   setSortedData(() => sortData(data, { sortBy: field, reversed, search }))
  // }

  // const handleSearchChange = (event) => {
  //   const { value } = event.currentTarget
  //   setSearch(value)
  //   setSortedData(
  //     sortData(data, { sortBy, reversed: reverseSortDirection, search: value }),
  //   )
  // }

  const rows = sortedData
    .filter((val) => {
      if (search == '') {
        return val
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val
      } else if (val.validator.toLowerCase().includes(search.toLowerCase())) {
        return val
      } else if (val.address.toLowerCase().includes(search.toLowerCase())) {
        return val
      }
    })
    .map((row, key) => (
      <tr key={key}>
        <td
          style={{
            fontSize: '12px',
          }}
        >
          {row.name}
        </td>
        <td
          style={{
            fontSize: '12px',
          }}
        >
          {row.validator}
        </td>
        <td
          style={{
            fontSize: '12px',
          }}
        >
          {row.address.slice(0, 9) + '...'}
        </td>
        <td
          style={{
            fontSize: '12px',
          }}
        >
          <Moment fromNow>{row.created_at}</Moment>
        </td>
        <td
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
          }}
        >
          <p>{ethers.utils.formatUnits(row.min_amount)} ETH</p>{' '}
          <Link href="/">
            <a className={styles.dashboardTableViewButton}>View</a>
          </Link>
        </td>
      </tr>
    ))

  return (
    <div className={styles.dashboardTableContainer}>
      <h3 className={styles.dashboardTableHeader}>Popular Campaigns</h3>
      <TextInput
        placeholder="Search campaign, validator or campaign link"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        icon={<IconSearch size={16} />}
        styles={{
          input: {
            width: '100%',
            maxWidth: '396px',
            borderRadius: '16px',
            height: '48px',
            padding: '0 16px',
            margin: '0',
          },
          root: {
            marginBottom: '32px',
          },
        }}
      />
      <ScrollArea
        sx={{ height: 240 }}
        onScrollPositionChange={({ y }) => setScrolled(() => y !== 0)}
        style={{ borderRadius: '8px 8px 8px 8px' }}
      >
        <Table
          horizontalSpacing="md"
          verticalSpacing={0}
          sx={{ minWidth: 700 }}
          striped
          highlightOnHover
        >
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <Th
              // sorted={sortBy === 'name'}
              // reversed={reverseSortDirection}
              // onSort={() => setSorting('name')}
              >
                Campaign Name
              </Th>
              <Th
              // sorted={sortBy === 'validator'}
              // reversed={reverseSortDirection}
              // onSort={() => setSorting('validator')}
              >
                Validator
              </Th>
              <Th
              // sorted={sortBy === 'address'}
              // reversed={reverseSortDirection}
              // onSort={() => setSorting('address')}
              >
                Escrow Address
              </Th>
              <Th
              // sorted={sortBy === 'created_at'}
              // reversed={reverseSortDirection}
              // onSort={() => setSorting('created_at')}
              >
                Created
              </Th>
              <Th
              // sorted={sortBy === 'min_amount'}
              // reversed={reverseSortDirection}
              // onSort={() => setSorting('min_amount')}
              >
                Minimum Amount
              </Th>
            </tr>
          </thead>
          <tbody
            style={{
              overflowY: 'scroll',
            }}
          >
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={5}>
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
  )
}

export default DashbordTable
