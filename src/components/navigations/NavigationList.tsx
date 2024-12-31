import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import {
  ChevronRightRounded as IconRight,
  ExpandMore as IconDown,
} from '@mui/icons-material'
import { NextLink } from '@/components/NextLink'
import { useSelector } from 'react-redux'
import { RootState } from '@/libs/stores'
import { navigationItems } from './navigationItems' // Import the navigation items

export const NavigationList = () => {
  const pathname = usePathname() // Get current path
  const { sidebar } = useSelector((state: RootState) => state.layout)
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({}) // Track open state for collapsible menus

  // Group items by `group`
  const groupedNavigationItems = navigationItems.reduce((acc, item) => {
    acc[item.group] = acc[item.group] || []
    acc[item.group].push(item)
    return acc
  }, {} as Record<string, typeof navigationItems>)

  // Check if the link is active
  const isActive = (href: string) => pathname === href

  // Toggle menu open state
  const toggleMenu = (menuKey: string) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuKey]: !prevState[menuKey],
    }))
  }

  return (
    <List>
      {Object.entries(groupedNavigationItems).map(([group, items]) => (
        <div key={group}>
          {!sidebar.folded && <ListSubheader>{group}</ListSubheader>}
          <Divider />
          {items.map((item) => (
            <div key={item.label}>
              {/* Main Navigation Item */}
              <ListItem disablePadding>
                {item.subItems ? (
                  <ListItemButton
                    className="transition-all duration-300 ease-in-out rounded-lg mx-2"
                    onClick={() => toggleMenu(item.label)}
                  >
                    <ListItemIcon className="min-w-[40px] text-blue-400 flex justify-center">
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      className={`transition-opacity duration-300 ${
                        sidebar.folded ? 'opacity-0 w-0' : 'opacity-100 w-auto'
                      }`}
                    />
                    {!sidebar.folded &&
                      (openMenus[item.label] ? <IconDown /> : <IconRight />)}
                  </ListItemButton>
                ) : (
                  <NextLink href={item.href} className="w-full">
                    <ListItemButton
                      className="transition-all duration-300 ease-in-out rounded-lg mx-2"
                      selected={isActive(item.href)}
                    >
                      {item.icon && (
                        <ListItemIcon className="min-w-[40px] text-blue-400 flex justify-center">
                          <item.icon />
                        </ListItemIcon>
                      )}
                      <ListItemText
                        primary={item.label}
                        className={`transition-opacity duration-300 ${
                          sidebar.folded
                            ? 'opacity-0 w-0'
                            : 'opacity-100 w-auto'
                        }`}
                      />
                    </ListItemButton>
                  </NextLink>
                )}
              </ListItem>

              {/* Submenu for Collapsible Items */}
              {item.subItems && (
                <Collapse
                  in={openMenus[item.label] && !sidebar.folded}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem disablePadding key={subItem.label}>
                        <NextLink href={subItem.href} className="w-full">
                          <ListItemButton
                            className="pl-12 rounded-lg mx-2"
                            selected={isActive(subItem.href)}
                          >
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        </NextLink>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </div>
      ))}
    </List>
  )
}
