import { Provider } from 'react-redux'
import { store } from '../stores'
import type { ReactNode } from 'react'

interface Props {
  readonly children: ReactNode
}

export const ReduxProvider = ({ children }: Props) => {
    return <Provider store={store}>{children}</Provider>
}
