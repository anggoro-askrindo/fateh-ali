import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { Sidebar } from './sidebars/Sidebar'
import type { FC, ReactNode } from 'react'
import type { RootState } from '../../libs/stores'

interface Props {
  children: ReactNode
}

/* ------------------------------ Start ------------------------------*/
export const Main: FC<Props> = ({ children }) => {
  const { sidebar } = useSelector((state: RootState) => state.layout)
  return (
    <Box
      component={'main'}
      sx={{
        width: sidebar.visible
          ? `calc(100% - ${
              sidebar.folded ? sidebar.widths.folded : sidebar.widths.expanded
            }px)`
          : '100%',
        marginLeft: sidebar.visible
          ? `${
              sidebar.folded ? sidebar.widths.folded : sidebar.widths.expanded
            }px`
          : 0,
        transition: 'margin-left 0.2s ease-out, width 0.2s ease-out',
        paddingTop: (theme) => `${theme.mixins.toolbar.height}px`,
      }}
    >
      {sidebar.visible && <Sidebar />}
      {children}
    </Box>
  )
}
