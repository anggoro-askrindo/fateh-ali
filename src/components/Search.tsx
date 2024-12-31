import { useEffect, useRef } from 'react'
import { Box, IconButton, Typography as Text, TextField } from '@mui/material'
import { SearchRounded as IconSearch } from '@mui/icons-material'

/* ------------------------------ Start ------------------------------*/
export const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Regist Listener untuk mendeteksi Ctrl + K dan Esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault() // Mencegah default browser behavior
        searchInputRef.current?.focus() // Fokus ke input search
      }
      if (event.key === 'Escape') {
        searchInputRef.current?.blur() // Hilangkan fokus saat tombol Esc ditekan
      }
    }

    // Tambahkan event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup saat komponen di-unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        inputRef={searchInputRef}
        id="search"
        variant="outlined"
        placeholder="Search"
        slotProps={{
          input: {
            startAdornment: (
              <IconButton>
                <IconSearch />
              </IconButton>
            ),
            endAdornment: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Text variant="body2">Ctrl</Text>
                <Text variant="body2">+</Text>
                <Text variant="body2">K</Text>
              </Box>
            ),
          },
        }}
      />
    </Box>
  )
}
