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
} from '@mui/material'
import {
  ArrowBackRounded as IconArrowBack,
  ChevronRightRounded as IconRight,
  HelpRounded as IconHelp,
  LogoutRounded as IconLogout,
  SettingsRounded as IconSettings,
  SwitchAccountRounded as IconSwitchAccount,
} from '@mui/icons-material'
import { toggleRightPanel } from '@/libs/stores/models/layout'

interface UserMenuProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: (event: MouseEvent<HTMLElement>) => void
}

/* ------------------------------ Start ------------------------------*/
export const UserProfileMenu = ({ anchorEl, open, onClose }: UserMenuProps) => {
  const [swipeMenu, setSwipeMenu] = useState<'main' | 'help'>('main')
  const dispatch = useDispatch()

  const handleClickMenu = (event: MouseEvent<HTMLElement>) => {
    const { title } = event.currentTarget

    if (title === 'Help') {
      setSwipeMenu('help')
      return
    }

    if (title === 'Info') dispatch(toggleRightPanel())

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
          className: 'p-4',
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/* Menu Utama */}
      {swipeMenu === 'main' && (
        <Box
          className={`transition-transform duration-500 ${
            swipeMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '300px' }}
        >
          <Box className="flex items-center p-4">
            <Avatar
              src="https://example.com/avatar.jpg"
              alt="User Avatar"
              className="mr-3"
            />
            <Box>
              <Text variant="subtitle1" className="font-bold">
                Fateh Ali
              </Text>
              <Text variant="body2" color="textSecondary">
                fatehalive@gmail.com
              </Text>
            </Box>
          </Box>

          <Divider />

          {/* Menu Items */}
          <MenuItem title="Account Settings" onClick={handleClickMenu}>
            <IconSettings fontSize="small" className="mr-2" />
            Account settings
          </MenuItem>

          <MenuItem disabled title="Switch Account" onClick={handleClickMenu}>
            <IconSwitchAccount fontSize="small" className="mr-2" />
            Switch account
          </MenuItem>

          <Divider />

          <MenuItem
            title="Help"
            onClick={handleClickMenu}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display="flex" alignItems="center">
              <IconHelp fontSize="small" className="mr-2" />
              Help
            </Box>
            <IconRight />
          </MenuItem>

          <Link href={'/'}>
            <MenuItem title="Logout" onClick={handleClickMenu}>
              <IconLogout fontSize="small" className="mr-2" />
              Log out
            </MenuItem>
          </Link>
        </Box>
      )}

      {/* Help Panel */}
      {swipeMenu === 'help' && (
        <Box
          className={`transition-transform duration-500 ${
            swipeMenu === 'help' ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '300px' }}
        >
          <Box className="flex items-center border-b">
            <IconButton title="Back" onClick={() => setSwipeMenu('main')}>
              <IconArrowBack fontSize="small" />
            </IconButton>
            <Text variant="subtitle1">Help</Text>
          </Box>

          <Box className="p-4">
            <MenuItem title="Documentation" onClick={handleClickMenu}>
              Documentation
            </MenuItem>

            <MenuItem title="Report" onClick={handleClickMenu}>
              Report Issue
            </MenuItem>

            <MenuItem title="Info" onClick={handleClickMenu}>
              About
            </MenuItem>
          </Box>
        </Box>
      )}
    </Menu>
  )
}
