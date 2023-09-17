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

    if (image === undefined && message === '') {
      alert('empty message')
      return
    }
    sendMessage(message)

  }

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    setImage(file)
  }

  return (
    <div className='text-center'>
      <form
        className='relative flex flex-col items-center gap-2'
        action="post-blog"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="Write here..."
          className='w-100% min-w-100% h-28'
          id='input-message'
        />

        <div className='absolute bottom-0 w-96% py-2 '>
          <div className='flex justify-between items-center w-100%'>
            <input
              className='hidden'
              name='file'
              type='file'
              id='file-upload'
              accept='image/*'
              onChange={handleChangeImage}
            />
            <div className='flex gap-4'>
              <label
                className='flex items-center cursor-pointer gap-1'
                htmlFor='file-upload'
              >
                <ImageAddIcon
                  width={22}
                  height={22}
                  strokeWidth='2'
                  strokeLinecap="round"
                  stroke={`${(image !== undefined) ? '#01f77b' : '#8f8f8f'}`}
                />
                <div className={`text-1rem ${(image !== undefined) ? 'text-#01f77b' : 'text-#8f8f8f'}`}>Image</div>
              </label>

              <button
                type='button'
                className='flex items-center bg-transparent border-none shadow-none active:border-none p-0 gap-1'
                onClick={() => { setRefresh(!refresh) }}>

                <RefreshIcon
                  width={22}
                  height={22}
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke='#8f8f8f'
                />
                <div className="text-1rem text-#8f8f8f">Refresh</div>
              </button>
            </div>

            <div>
              <button
                className='flex items-center justify-center border-none shadow-none active:border-none p-0 w-1.9rem h-1.9rem rounded-50% bg-#333331 hover:bg-#424240'
                type='submit'>

                <SendIcon
                  width={14}
                  height={14}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

export default LayoutPost
