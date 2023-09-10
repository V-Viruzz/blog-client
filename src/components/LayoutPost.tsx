import { useContext, type ChangeEvent, type FormEvent } from 'react'
import { LuxContext } from '../context/lux'
import ImageAddIcon from './Icons/ImageAddIcon'
import RefreshIcon from './Icons/RefreshIcon'
import SendIcon from './Icons/SendIcon'

interface Props {
  image?: Blob
  setImage: (image: Blob | undefined) => void
  sendMessage: (message: string) => Promise<void>
}

const LayoutPost: React.FC<Props> = ({ image, setImage, sendMessage }) => {
  const { setRefresh, refresh } = useContext(LuxContext)


  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const target = (event.target as HTMLFormElement)
    const message = target['input-message'].value;
    target.reset()
    sendMessage(message)

  }

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    setImage(file)
  }

  return (
    <div className='text-center'>
      <form
        className='flex flex-col items-center gap-2'
        action="post-blog"
        onSubmit={handleSubmit}
      >
        <textarea
          className='w-100% h-20 max-w-sm'
          id='input-message'
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

            <RefreshIcon strokeWidth="2" strokeLinecap="round" />
          </button>
          <button
            className='bg-transparent border-none shadow-none active:border-none p-0'
            type='submit'>

            <SendIcon strokeWidth="2" strokeLinecap="round" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default LayoutPost
