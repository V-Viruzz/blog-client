import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../server/firebase'

interface useLoginReturnType {
  isLogin: boolean
  setIsLogin: (boolean: boolean) => void
  currentUser: object
}

function useLogin (): useLoginReturnType {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log('user is already logged in', user)
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
