import { useState, useEffect } from 'react'
import { type Message } from '../types'
import { useLuxContext } from '../context/lux'
import gettingLux from '../server/gettingLux'
import gettingUser from '../server/gettingUser'
import { deleteLux } from '../server/deleteLux'

export interface useLuxReturnType {
  isLoading: boolean
  lux: Message[]
  setLux: (value: Message[]) => void
  incrementElements: (num: number) => void
  removeLux: (id: string) => Promise<void>
}

function useLux (uid?: string): useLuxReturnType {
  const { refresh, setRefresh } = useLuxContext()
  const [lux, setLux] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [numberOfElements, setNumberOfElements] = useState(7)

  const incrementElements = (num: number): void => {
    setNumberOfElements(prev => prev + num)
  }

  const removeLux = async (id: string): Promise<void> => {
    if (typeof uid === 'undefined') return
    await deleteLux(uid, id)
    setRefresh(!refresh)
  }

  const fetchData = async (): Promise<void> => {
    try {
      const res = uid === 'home'
        ? await gettingLux(numberOfElements)
        : uid !== 'home'
          ? await gettingUser(uid)
          : undefined

      if (typeof res === 'undefined') {
        console.log('res is undefined')
        return
      }
      setLux(res)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [refresh, numberOfElements, uid])

  return { isLoading, lux, setLux, incrementElements, removeLux }
}

export default useLux
