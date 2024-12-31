import { IconButton, Avatar } from '@mui/material'
import type { MouseEvent } from 'react'

interface UserMenuButtonProps {
  onOpen: (event: MouseEvent<HTMLElement>) => void
}

/* ------------------------------ Start ------------------------------*/
export const UserProfileButton = ({ onOpen }: UserMenuButtonProps) => {
  return (
    <IconButton title="User Menu" onClick={onOpen} className="ml-4">
      <Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />
    </IconButton>
  )
}
