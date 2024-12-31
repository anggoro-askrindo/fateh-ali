import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Typography as Text,
  Menu,
  MenuItem,
} from '@mui/material'
import {
  AppsRounded as IconApps,
  HomeRounded as IconHome,
} from '@mui/icons-material'
import { setDarkMode } from '../libs/stores/models/preference'
import type { MouseEvent } from 'react'
import type { RootState } from '../libs/stores'

/* ------------------------------ Start ------------------------------*/
export const AppsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { darkMode } = useSelector((state: RootState) => state.preference)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)

  const handleClickOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClickClose = (event: MouseEvent<HTMLElement>) => {
    const { title } = event.currentTarget

    if (title === 'Theme') {
      dispatch(setDarkMode(!darkMode))
    }

    setAnchorEl(null)
  }

  return (
    <Box>
      <IconButton title="Apps" onClick={handleClickOpen} className="ml-4">
        <IconApps fontSize="medium" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClickClose}
        slotProps={{
          paper: {
            className: 'p-4',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* User Info */}
        <Text variant="subtitle1" className="px-4 py-2 font-bold">
          YOUR APPS
        </Text>

        <Divider />

        {/* Apps Items */}
        <MenuItem title="Home" onClick={handleClickClose}>
          <ListItemIcon>
            <IconHome fontSize="small" className="mr-2" />
            <Text>BTN Home</Text>
          </ListItemIcon>
        </MenuItem>

        <MenuItem title="Virtual Account Hub" onClick={handleClickClose}>
          <ListItemIcon>
            <IconHome fontSize="small" className="mr-2" />
            <Text>Vahub</Text>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Box>
  )
}
