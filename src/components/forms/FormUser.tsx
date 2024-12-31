import { useRouter } from 'next/router'
import { Box, Button, CircularProgress, Paper, Typography as Text, TextField } from '@mui/material'
import { PasswordTextField } from './textfields/PasswordTextField'
import { useTransition, type FormEvent } from 'react'
import { LogoDevRounded } from '@mui/icons-material'

/* ------------------------------ Start ------------------------------*/
export const FormUser = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const mockToken = 'mock-token-here'
    document.cookie = `token=${mockToken}; path=/; max-age=${60 * 60 * 24}; secure; samesite=strict`
    startTransition(() => {
      // Redirect to /
      router.push('/')
    })
  }

  return (
    <Paper
      component="form"
      className="bg-white p-6 rounded-lg shadow-lg w-80"
      onSubmit={handleSubmit}
    >
      <LogoDevRounded fontSize='large' />
      <Text variant="h3" className="text-3xl font-bold mb-6 text-center">
        Login
      </Text>
      <Text className="text-center text-xs text-slate-400">
        Please enter your credential
      </Text>
      <Box className="mt-10 space-y-4">
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          id="Email"
          label="Email"
          className="w-full"
          required
        />
        <PasswordTextField />
        <Button
          type="submit"
          variant="contained"
          className="w-full py-2 px-4 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {isPending ? <CircularProgress color="inherit" size={20} /> : 'Login'}
        </Button>
      </Box>
    </Paper>
  )
}
