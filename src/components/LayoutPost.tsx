import { useState, type ChangeEvent, type FormEvent } from 'react'
import postBlog from '../server/postBlog'

function LayoutPost (): JSX.Element {
  const [message, setMessage] = useState<string>('')
  const [image, setImage] = useState<Blob>()

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value
    setMessage(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    void postBlog({ message, image })
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
        // encType='multipart/form-data'
      >
        {/* <label htmlFor="post-blog">
            enter text
          </label> */}
        {/* <input className='w-2xl' type="t" /> */}
        <textarea
          className='w-100% h-20 max-w-sm'
          onChange={handleChangeText}
        ></textarea>
        <div className='flex justify-between w-100% max-w-sm'>
          <input
            className='hidden'
            name='file'
            type='file'
            id='file-upload'
            accept='image/*'
            onChange={handleChangeImage}
          />
          <label
            className='w-16 flex items-center '
            htmlFor='file-upload'
          >
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g>
            </svg>
          </label>
          <button
            type='submit'>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default LayoutPost
