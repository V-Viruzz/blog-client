import { useState, useEffect, useContext } from 'react'
import { type Message } from '../types'
import { LuxContext } from '../context/lux'
import gettingLuxUser from '../server/gettingLuxUser'

export interface useLuxReturnType {
  isLoading: boolean
  lux: Message[]
  setLux: (value: Message[]) => void
  incrementElements: (num: number) => void
}

function useLuxUser(uid: string): useLuxReturnType {
  const { refresh } = useContext(LuxContext)
  const [lux, setLux] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true) // Nuevo estado local para controlar la carga
  const [numberOfElements, setNumberOfElements] = useState(7)

  const incrementElements = (num: number): void => {
    setNumberOfElements(prev => prev + num)
  }

  useEffect(() => {
    gettingLuxUser(uid)
      .then((res) => {
        if (typeof res === 'undefined') { console.log('res is undefined'); return }
        setLux(res)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [refresh, numberOfElements, uid])

  return { isLoading, lux, setLux, incrementElements }
}

export default useLuxUser
