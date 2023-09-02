import { useState, useContext } from 'react'
import postBlog from '../server/postBlog'
import { LuxContext } from '../context/lux'

interface useMessageReturnType {
  message: string
  setMessage: (message: string) => void
  image?: Blob
  setImage: (image: Blob | undefined) => void
  sendMessage: (message: string) => Promise<void>
}

function useMessage (): useMessageReturnType {
  const { setRefresh, refresh } = useContext(LuxContext)
  const [message, setMessage] = useState<string>('')
  const [image, setImage] = useState<Blob>()

  const sendMessage = async (message: string): Promise<void> => {
    const lenghText: number = message.length
    if (lenghText >= 1500) {
      window.alert(`llegaste al limite de caracteres -${lenghText - 1500}`)
      return
    }

    await postBlog({ message, image })
    setImage(undefined)
    setMessage('')
    setRefresh(!refresh)
  }

  return {
    message,
    setMessage,
    image,
    setImage,
    sendMessage
  }
}

export default useMessage
