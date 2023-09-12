import { createContext, useContext, useState } from 'react'

interface ContextProps {
  refresh: boolean
  setRefresh: (room: any) => void
}

export const LuxContext = createContext<ContextProps>({} as any)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const LuxProvider: React.FC<Props> = ({ children }) => {
  const [refresh, setRefresh] = useState(true)
  return (
    <LuxContext.Provider value={{
      refresh,
      setRefresh
    }}
    >
      {children}
    </LuxContext.Provider>
  )
}

export const useLuxContext = () => useContext(LuxContext)
