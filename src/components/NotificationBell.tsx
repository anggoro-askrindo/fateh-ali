import { useState } from 'react'
import { Box } from '@mui/material'
import { NotificationBellButton } from './NotificationBellButton'
import { NotificationBellMenu } from './NotificationBellMenu'
import type { MouseEvent } from 'react'

/* ------------------------------ Start ------------------------------*/
export const NotificationBell = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <NotificationBellButton onOpen={handleOpenMenu} />
      {open && (
        <NotificationBellMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
        />
      )}
    </Box>
  )
}
