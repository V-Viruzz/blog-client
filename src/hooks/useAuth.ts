import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification, type User } from 'firebase/auth'
import { auth } from '../server/firebase'
import { useErrorContext } from '../context/error'
import useLogin from './useLogin'
import createUser from '../server/createUser'

interface useAuthReturnType {
  registerUser: (email: string, password: string) => Promise<void>
  loginUser: (email: string, password: string) => Promise<void>
  signOutUser: () => Promise<void>
  isRegister: boolean
  isLogin: boolean
  currentUser: User
  error: {
    showError: boolean
    messageError: string
  }
}

function useAuth (): useAuthReturnType {
  const [isRegister, setIsRegister] = useState(true)
  const { error, handleError } = useErrorContext()
  const { isLogin, setIsLogin, currentUser } = useLogin()

  const registerUser = async (email: string, password: string): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await createUser(userCredential)

      if (auth.currentUser === null) return

      await sendEmailVerification(auth.currentUser)
        .then(() => {
          handleError('You were sent an email for you to verify')
        })
        .catch(err => { console.log(err) })
    } catch (error) {
      getErrorMessage(error)
    }
  }

  const loginUser = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      getErrorMessage(error)
    }
  }

  const signOutUser = async (): Promise<void> => {
    try {
      await signOut(auth)
      setIsLogin(false)
      console.log('Usuario cerró sesión')
    } catch (error) {
      console.error('Error al cerrar sesión', error)
    }
  }

  const getErrorMessage = (error: any): void => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        handleError('Este correo electrónico ya está en uso.')
        setIsRegister(true)
        break
      case 'auth/invalid-email':
        handleError('Correo electrónico inválido.')
        break
      case 'auth/weak-password':
        handleError('La contraseña es demasiado débil.')
        break
      case 'auth/wrong-password':
        handleError('Contraseña incorrecta.')
        break
      case 'auth/user-not-found':
        handleError('Usuario no registrado.')
        setIsRegister(false)
        break
      default:
        handleError('Ha ocurrido un error.')
        break
    }
  }

  return {
    registerUser,
    loginUser,
    signOutUser,
    isRegister,
    isLogin,
    currentUser,
    error
  }
}

export default useAuth
