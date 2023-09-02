import { useContext, type ChangeEvent, type FormEvent } from 'react'
import { LuxContext } from '../context/lux'
import ImageAddIcon from './Icons/ImageAddIcon'
import RefreshIcon from './Icons/RefreshIcon'
import SendIcon from './Icons/SendIcon'

interface Props {
  message: string
  image?: Blob
  setMessage: (message: string) => void
  setImage: (image: Blob | undefined) => void
  sendMessage: (message: string) => Promise<void>
}

const LayoutPost: React.FC<Props> = ({ message, image, setMessage, setImage, sendMessage }) => {
  const { setRefresh, refresh } = useContext(LuxContext)

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value
    setMessage(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    sendMessage(message)
  }

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    setImage(file)
  }

  return (
    <div className='text-center'>
      <h2>Post blog</h2>
      <form
        className='flex flex-col items-center gap-2'
        action="post-blog"
        onSubmit={handleSubmit}
      >
        <textarea
          className='w-100% h-20 max-w-sm'
          onChange={handleChangeText}
          value={message}
        ></textarea>
        <div className='flex justify-between items-center w-100% max-w-sm'>
          <input
            className='hidden'
            name='file'
            type='file'
            id='file-upload'
            accept='image/*'
            onChange={handleChangeImage}
          />
          <label
            className='w-16 flex items-center cursor-pointer'
            htmlFor='file-upload'
          >
            <ImageAddIcon strokeWidth='2' strokeLinecap="round" stroke={`${(image !== undefined) ? '#01f77b' : '#ffffff'}`} />
          </label>
          <button
            type='button'
            className='bg-transparent border-none shadow-none active:border-none p-0'
            onClick={() => { setRefresh(!refresh) }}>

            <RefreshIcon strokeWidth="2" strokeLinecap="round"/>
          </button>
          <button
            className='bg-transparent border-none shadow-none active:border-none p-0'
            type='submit'>

            <SendIcon strokeWidth="2" strokeLinecap="round"/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LayoutPost
