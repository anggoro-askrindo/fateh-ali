import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Drawer,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { SidebarBottom } from './SidebarBottom'
import { SidebarTop } from './SidebarTop'
import { NavigationList } from '../../navigations/NavigationList'
import type { RootState } from '../../../libs/stores'
import { useEffect } from 'react'
import { toggleLeftSidebarFold } from '@/libs/stores/models/layout'

/* ------------------------------ Start ------------------------------*/
export const Sidebar = () => {
  const theme = useTheme()
  const screenUnderLG = useMediaQuery(theme.breakpoints.down('lg'))
  const layout = useSelector((state: RootState) => state.layout)
  const dispatch = useDispatch()
  const { sidebar } = layout

  useEffect(() => {
    if (screenUnderLG && sidebar.visible && !sidebar.folded) {
      dispatch(toggleLeftSidebarFold())
    }
  }, [screenUnderLG])

  return (
    <Drawer
      variant="persistent"
      component={'aside'}
      open={sidebar.visible}
      sx={{
        '& .MuiDrawer-paper': {
          width: sidebar.visible
            ? sidebar.folded
              ? sidebar.widths.folded
              : sidebar.widths.expanded
            : 0,
          overflowX: 'hidden', // Prevents content overflow during transitions
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
        },
      }}
    >
      <Toolbar />
      <SidebarTop />
      <Box className="flex-grow">
        <NavigationList />
      </Box>
      <SidebarBottom />
    </Drawer>
  )
}
