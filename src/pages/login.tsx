import { Box } from '@mui/material'
import { FormLogin } from '../components/forms/FormLogin'

/* ------------------------------ Start ------------------------------*/
export default function Login() {
  return (
    <Box className="h-screen bg-slate-600 flex justify-center items-center">
      <FormLogin />
    </Box>
  )
}
