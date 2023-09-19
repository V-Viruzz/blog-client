import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../server/firebase'

import createUser from '../server/createUser'
import googleLogo from '../assets/icons8-google.svg'
import githubLogo from '../assets/icons8-github.svg'

function LoginSocial (): JSX.Element {
  const handleClickGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      console.log('login google', credentials)

      const user = await createUser(credentials)
      console.log('🚀 ~ file: LoginSocial.tsx:16 ~ handleClickGoogle ~ user:', user)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickGitHub = async (): Promise<void> => {
    const provider = new GithubAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      await createUser(credentials)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex justify-between'>
      <button
        type='button'
        className='bg-gray-100 hover:bg-gray-300 hover:text-black hover:border-gray-50 cursor-pointer px-3 py-2 font-semibold text-black inline-flex items-center space-x-2 rounded'
        onClick={handleClickGoogle}
      >
        <img className='h-5' src={googleLogo} alt='' />
        <span>Google</span>
      </button>

      <button
        type='button'
        className='bg-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-gray-950 cursor-pointer px-3 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded'
        onClick={handleClickGitHub}
      >
        <img className='h-5' src={githubLogo} alt='' />
        <span>Github</span>
      </button>
    </div>
  )
}

export default LoginSocial
