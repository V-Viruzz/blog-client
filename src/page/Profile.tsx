import { type FormEvent } from 'react'
import RegisterAndLogin from '../components/RegisterAndLogin'
import useAuth from '../hooks/useAuth'
import ProfileUser from '../components/ProfileUser'

function Profile (): JSX.Element {
  const { registerUser, loginUser, signOutUser, isRegister, isLogin, error, currentUser } = useAuth()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      'signup-email': { value: string }
      'signup-password': { value: string }
    }
    const email = target['signup-email'].value
    const password = target['signup-password'].value

    isRegister
      ? await loginUser(email, password)
      : await registerUser(email, password)
  }

  return (
    <>
    <div className='grid place-content-center h-full'>
      <div>
        {
          isLogin
            ? <ProfileUser
              user={currentUser}
              signOutUser={signOutUser}
            />
            : <RegisterAndLogin
              isRegister={isRegister}
              handleSubmit={handleSubmit}
            />
        }
        {
          error.showError &&
          <div className='absolute top-0 right-0 bg-blue-9 p-3 m-3 rounded-lg'>
            {error.messageError}
          </div>
        }

      </div>
    </div>
    <div className='w-100% h-4rem'></div>
    </>
  )
}

export default Profile
