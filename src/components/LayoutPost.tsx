import { useState, useContext, type ChangeEvent, type FormEvent } from 'react'
import { LuxContext } from '../context/lux'
import postBlog from '../server/postBlog'

function LayoutPost (): JSX.Element {
  const { setRefresh, refresh } = useContext(LuxContext)
  const [message, setMessage] = useState<string>('')
  const [image, setImage] = useState<Blob>()

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value
    setMessage(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const lenghText: number = message.length
    if (lenghText >= 1500) {
      window.alert(`llegaste al limite de caracteres -${lenghText - 1500}`)
      return
    }

    void postBlog({ message, image })
      .then(() => {
        setImage(undefined)
        setMessage('')
        setRefresh(!refresh)
      })
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
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
          </label>
          <button
            type='button'
            className='bg-transparent border-none shadow-none active:border-none p-0'
            onClick={() => { setRefresh(!refresh) }}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9381 13C19.979 12.6724 20 12.3387 20 12C20 7.58172 16.4183 4 12 4C9.49942 4 7.26681 5.14727 5.7998 6.94416M4.06189 11C4.02104 11.3276 4 11.6613 4 12C4 16.4183 7.58172 20 12 20C14.3894 20 16.5341 18.9525 18 17.2916M15 17H18V17.2916M5.7998 4V6.94416M5.7998 6.94416V6.99993L8.7998 7M18 20V17.2916" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
          </button>
          <button
            className='bg-transparent border-none shadow-none active:border-none p-0'
            type='submit'>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LayoutPost
