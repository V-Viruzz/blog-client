import { createContext, useState } from 'react'

interface ContextProps {
  error: {
    showError: boolean
    messageError: string
  }
  handleError: (message: string) => void
}

export const ErrorContext = createContext<ContextProps>({} as any)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ErrorProvider: React.FC<Props> = ({ children }) => {
  const [error, setError] = useState({ showError: false, messageError: '' })

  const handleError = (text: string): void => {
    setError({ showError: true, messageError: text })
    setTimeout(() => { setError({ showError: false, messageError: '' }) }, 6000)
  }

  return (
    <ErrorContext.Provider value={{
      error,
      handleError
    }}
    >
      {children}
    </ErrorContext.Provider>
  )
}
