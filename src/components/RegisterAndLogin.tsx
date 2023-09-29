import { type FormEvent } from 'react'
import LoginSocial from './LoginSocial'

interface Props {
  isRegister: boolean
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

const RegisterAndLogin: React.FC<Props> = ({ isRegister, handleSubmit }) => {
  return (
    <>
      <div>
        <h3 className='my-3'>
          {isRegister ? 'Login User' : 'Register User'}
        </h3>
      </div>
      <div>
        <form className="grid gap-3" onSubmit={async (e) => { await handleSubmit(e) }}>
          <LoginSocial />
          <input
            type='email'
            placeholder='Email'
            id='signup-email'
            className='m-0 block w-full appearance-none rounded-lg  bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 border-solid border dark:border-none' />
          <input
            type='password'
            placeholder='password'
            id='signup-password'
            className='m-0 block w-full appearance-none rounded-lg  bg-bluegray-900 bg-opacity-50 px-4 py-3 text-center text-base placeholder-bluegray-400 shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 border-solid border dark:border-none' />
          <button
            type='submit'
            className='bg-blue-9 dark:bg-slate-800 text-white w-full h-11 rounded-lg'>
            Continuar
            </button>
        </form>
      </div>
    </>
  )
}

export default RegisterAndLogin
