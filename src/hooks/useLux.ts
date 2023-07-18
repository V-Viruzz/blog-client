
import { useState } from 'react'
import { type Message } from '../types'

interface useLuxReturnType {
  lux: Message[]
  setLux: (value: Message[]) => void
}

function useLux (): useLuxReturnType {
  const [lux, setLux] = useState <Message[]>([])

  return { lux, setLux }
}

export default useLux
