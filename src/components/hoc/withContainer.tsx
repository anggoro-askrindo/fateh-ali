import { Container } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  containerWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
}

/* ------------------------------ Start ------------------------------*/
export const withContainer = ({ children, containerWidth }: Props) => {
  return containerWidth ? (
    <Container maxWidth={containerWidth}>{children}</Container>
  ) : (
    <>{children}</>
  )
}
