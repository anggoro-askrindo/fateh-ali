import Link, { LinkProps } from 'next/link'
import { forwardRef, ReactNode } from 'react'

/* ------------------------------ Start ------------------------------*/
interface NextLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(function NextLink(
  { children, ...props },
  ref,
) {
  return (
    <Link {...props} ref={ref}>
      {children}
    </Link>
  )
})

export default NextLink
