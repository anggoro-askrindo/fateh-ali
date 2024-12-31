import { useState } from 'react'
import { Box } from '@mui/material'
import { UserProfileButton } from './UserProfileButton'
import { UserProfileMenu } from './UserProfileMenu'
import type { MouseEvent } from 'react'

/* ------------------------------ Start ------------------------------*/
export const UserProfile = () => {
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
      <UserProfileButton onOpen={handleOpenMenu} />
      {open && (
        <UserProfileMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
        />
      )}
    </Box>
  )
}
