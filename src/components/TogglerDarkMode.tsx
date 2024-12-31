import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import {
  LightModeRounded as IconLightMode,
  DarkModeRounded as IconDarkMode,
} from '@mui/icons-material'
import { setDarkMode } from '@/libs/stores/models/preference'
import type { MouseEvent } from 'react'
import type { RootState } from '@/libs/stores'

/* ------------------------------ Start ------------------------------*/
export const TogglerDarkMode = () => {
  const { darkMode } = useSelector((state: RootState) => state.preference)
  const dispatch = useDispatch()

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    dispatch(setDarkMode(!darkMode))
  }

  return (
    <IconButton
      title="Theme"
      onClick={handleClick}
      className="rounded-full w-10 h-10 flex items-center justify-center"
    >
      {darkMode ? (
        <IconLightMode fontSize="medium" />
      ) : (
        <IconDarkMode fontSize="medium" />
      )}
    </IconButton>
  )
}
