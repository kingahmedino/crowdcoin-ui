import { Text, ScrollArea, TextInput, Table, Box } from '@mantine/core'
import React, { useState, createContext } from 'react'
import { IconSearch } from '@tabler/icons'
import styles from '../../../shared/styles/Dashboard.module.css'
import { useWeb3React } from '@web3-react/core'
import Moment from 'react-moment'
import Verified from './Verified'
import { useStyles, Th } from './TableHelpers'
import { ethers } from 'ethers'
import { ContributeModal } from '../Modal'

export const TableDataContext = createContext()

const ContributeTable = (props) => {
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

  const { account } = useWeb3React()

  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)

  const [id, setId] = useState('')
  const [TableData, setTableData] = useState({})
  const [open, setOpen] = useState(false)

  const [step, setStep] = useState(0)

  function handleGetId(id) {
    setId(() => id)
  }

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
    .map((row, index) => (
      <tr key={index}>
        <td
          style={{
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '43.6px',
          }}
        >
          <Box
            component="p"
            sx={{
              marginRight: '4px',
            }}
          >
            {row.name}
          </Box>
          <Verified />
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
          <Box
            onClick={() => {
              handleGetId(index)
              setTableData(() => {
                return {
                  id: index,
                  CampaignName: row.name,
                  ValidatorName: row.validator,
                  EscrowAddress: row.address,
                  Contribution: ethers.utils.formatUnits(row.min_amount),
                  ValidatorAddress: account,
                  Description: row.description,
                }
              })
              setOpen(() => true)
            }}
            component="button"
            sx={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              outline: 'none',
              padding: '0',
              margin: '0',
              color: '#2563eb',
              fontSize: '12px',
              fontWeight: '700',
              lineHeight: '16px',
            }}
          >
            View
          </Box>
        </td>
      </tr>
    ))

  return (
    <>
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
            backgroundColor: '#F2F2F2',
          },
          root: {
            marginBottom: '32px',
          },
        }}
      />
      <h3 className={styles.dashboardTableHeader}>Popular Campaigns</h3>

      <ScrollArea
        sx={{ height: 240 }}
        onScrollPositionChange={({ y }) => setScrolled(() => y !== 0)}
        style={{ borderRadius: '8px 8px 8px 8px' }}
      >
        <Table
          horizontalSpacing="md"
          verticalSpacing={0}
          sx={{ width: '100%' }}
          striped
          highlightOnHover
        >
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <Th>Campaign Name</Th>
              <Th>Validator</Th>
              <Th>Escrow Address</Th>
              <Th>Created</Th>
              <Th>Contribution</Th>
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
      <TableDataContext.Provider
        value={{ TableData, stepState: [step, setStep] }}
      >
        <ContributeModal
          open={open}
          close={() => {
            setOpen(false)
            setTimeout(() => {
              setStep(0)
            }, 500)
          }}
        />
      </TableDataContext.Provider>
    </>
  )
}

export default ContributeTable
