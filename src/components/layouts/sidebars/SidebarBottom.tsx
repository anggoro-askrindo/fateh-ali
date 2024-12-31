import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import {
  Settings as IconSettings,
  ChevronRightRounded as IconRight,
} from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/libs/stores'

/* ------------------------------ Start ------------------------------*/
export const SidebarBottom = () => {
  const pathname = usePathname()
  const { sidebar } = useSelector((state: RootState) => state.layout)

  return (
    <Toolbar>
      <List className="w-full border-t">
        <ListItem disablePadding className="flex justify-center items-center">
          {sidebar.folded ? (
            <IconButton>
              <IconSettings />
            </IconButton>
          ) : (
            <ListItemButton
              className="w-full"
              sx={{
                backgroundColor: pathname.includes('settings')
                  ? 'rgba(0,0,0,0.08)'
                  : 'inherit',
                fontWeight: pathname.includes('settings') ? 'bold' : 'normal',
              }}
            >
              <ListItemIcon className="min-w-10 border">
                <IconSettings />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                primaryTypographyProps={{
                  className: 'text-sm', // Tailwind utility class for font size
                }}
              />
              <IconRight fontSize="small" />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Toolbar>
  )
}
