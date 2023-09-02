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

    console.log('🚀 ~ file: Profile.tsx:76 ~ handleSubmit ~ isRegister:', isRegister)
    isRegister
      ? await loginUser(email, password)
      : await registerUser(email, password)
  }

  return (
    <main className="grid place-content-center h-100%">
      <div className="grid grid-cols-auto grid-rows-layout">
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
          error.showError && <div>{error.messageError}</div>
        }

      </div>
    </main>
  )
}

export default Profile
