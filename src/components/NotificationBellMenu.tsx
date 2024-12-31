import React, { useState, MouseEvent } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography as Text,
  Switch,
  Tabs,
  Tab,
} from '@mui/material'
import {
  NotificationsOffRounded
} from '@mui/icons-material'
import { toggleRightPanel } from '@/libs/stores/models/layout'

interface UserMenuProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: (event: MouseEvent<HTMLElement>) => void
}

/* ------------------------------ Start ------------------------------*/
export const NotificationBellMenu = ({
  anchorEl,
  open,
  onClose,
}: UserMenuProps) => {
  const [tabIndex, setTabIndex] = useState(0) // 0: Direct, 1: Watching
  const [onlyUnread, setOnlyUnread] = useState(false) // Unread toggle
  const dispatch = useDispatch()

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  const handleToggleUnread = () => {
    setOnlyUnread(!onlyUnread)
  }

  const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
    const { title } = event.currentTarget
    if (title === 'Help') dispatch(toggleRightPanel())
    onClose(event)
  }

  if (!open) return null

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          className: 'p-4 w-[340px]',
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/* Tabs and Switch */}
      <Box className="flex items-center justify-between mb-2">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="notification tabs"
          className="flex-grow"
          variant="fullWidth"
        >
          <Tab label="Unread" />
          <Tab label="Read" />
        </Tabs>
        <IconButton
          size="small"
          onClick={handleToggleUnread}
          title="Only show unread"
        >
          <Switch
            checked={onlyUnread}
            onChange={handleToggleUnread}
            size="small"
          />
        </IconButton>
      </Box>

      <Divider />

      {/* Empty State */}
      <Box className="flex flex-col items-center text-center p-4">
        <NotificationsOffRounded
          className="mb-4 w-10 h-10"
          color='disabled'
        />
        <Text variant="body2" color="textSecondary">
          You have no notifications from the last 30 days.
        </Text>

      </Box>
    </Menu>
  )
}
