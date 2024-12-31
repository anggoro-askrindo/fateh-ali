import { Drawer, Toolbar, Typography as Text } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLeftPanel } from '@/libs/stores/models/layout'
import type { FC } from 'react'
import type { RootState } from '@/libs/stores'

interface Props {
  open?: boolean
  onClose?: () => void
}

/* ------------------------------ Start ------------------------------*/
export const LeftPanel: FC<Props> = (props) => {
  const { left } = useSelector((state: RootState) => state.layout.panels)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleLeftPanel())
  }

  if (!left.visible) return null
  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={left.visible}
      onClose={handleClose}
      sx={{
        // width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          // width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Text>Toolbar Text</Text>
      </Toolbar>
    </Drawer>
  )
}
