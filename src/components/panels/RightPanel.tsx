import {
  Box,
  Drawer,
  IconButton,
  Typography as Text,
  Toolbar,
  Divider,
} from '@mui/material'
import { Close as IconClose } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { toggleRightPanel } from '@/libs/stores/models/layout'
import type { FC } from 'react'
import type { RootState } from '@/libs/stores'
import packageJson from '../../../package.json'

interface Props {
  open?: boolean
  onClose?: () => void
}

/* ------------------------------ Start ------------------------------*/
export const RightPanel: FC<Props> = (props) => {
  const { right } = useSelector((state: RootState) => state.layout.panels)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleRightPanel())
  }

  if (!right.visible) return null

  return (
    <Drawer
      anchor="right"
      hideBackdrop
      transitionDuration={{ enter: 2000, exit: 200 }}
      open={right.visible}
      onClose={handleClose}
      PaperProps={{
        className: 'w-[380px] p-5',
      }}
    >
      <Toolbar />
      <Box className="flex justify-between items-center p-4">
        <Text variant="subtitle1" className="text-xl font-bold">
          About
        </Text>
        <IconButton size="small" onClick={handleClose}>
          <IconClose />
        </IconButton>
      </Box>

      <Divider />

      {/* Content Section */}
      <Box className="p-4">
        <Text variant="body2" color="textSecondary">
          application name: {packageJson.name}
        </Text>
        <Text variant="body2" color="textSecondary">
          version: {packageJson.version}
        </Text>
        <Text variant="body2" color="textSecondary">
          build id: {packageJson.name}
        </Text>

        {/* Developer Information */}
        <Text variant="body2" color="textSecondary">
          developed by: {packageJson?.author}
        </Text>
        <Text variant="body2" color="textSecondary">
          contact: support@askrindo.co.id
        </Text>

        {/* License and Copyright */}
        <Text variant="body2" color="textSecondary" className="mb-4">
          copyright © 2024 {packageJson.name}. All rights reserved. Licensed
          under MIT.
        </Text>
      </Box>
    </Drawer>
  )
}
