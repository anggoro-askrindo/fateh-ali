import { IconButton } from '@mui/material'
import { NotificationsRounded as IconBell } from '@mui/icons-material'
import type { MouseEvent } from 'react'

interface NotificationBellButtonProps {
  onOpen: (event: MouseEvent<HTMLElement>) => void
}

/* ------------------------------ Start ------------------------------*/
export const NotificationBellButton = ({
  onOpen,
}: NotificationBellButtonProps) => {
  return (
    <IconButton title="Notification Menu" onClick={onOpen} className="ml-4">
      <IconBell />
    </IconButton>
  )
}
