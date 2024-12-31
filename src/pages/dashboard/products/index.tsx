import { DashboardLayout } from '@/components/layouts/DashboardLayout'
import { Box, Typography as Text } from '@mui/material'
import type { ReactNode } from 'react'

/* ------------------------------ Start ------------------------------*/
export default function Products() {
  return (
    <Box className="bg-slate-300">
      <Box className="text-black border">
        <Text variant="h2" className="font-bold">
          Products Page
        </Text>
      </Box>
    </Box>
  )
}

Products.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)
