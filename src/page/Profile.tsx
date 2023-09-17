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
    <div className="flex w-100% h-100vh flex-col justify-center flex-wrap content-center">
      <div className="flex flex-wrap content-center w-100% flex-col">
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
  )
}

export default Profile
