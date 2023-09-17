import { useState, useEffect } from 'react'
import { type User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../server/firebase'

interface useLoginReturnType {
  isLogin: boolean
  setIsLogin: (boolean: boolean) => void
  currentUser: User
}

function useLogin(): useLoginReturnType {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState({} as User)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log('user is already logged in')
        setIsLogin(user.emailVerified)
        setCurrentUser(user)
      } else {
        console.log('user is not logged in')
      }
    })
  }, [])

  return { isLogin, setIsLogin, currentUser }
}

export default useLogin
