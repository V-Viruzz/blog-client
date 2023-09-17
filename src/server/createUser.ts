import { type UserCredential } from 'firebase/auth'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const API_URL: string = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function createUser ({ user }: UserCredential): Promise<void> {
  console.log('🚀 ~ file: createUser.ts:4 ~ createUser ~ auth:', user)
  try {
    const newUser = {
      user: {
        name: user.displayName ?? 'anonymous',
        email: user.email
      },
      uid: user.uid
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }
    const response = await fetch(`${API_URL}/api/user`, options)

    console.log('🚀 ~ file: createUser.ts:25 ~ createUser ~ response:', response)
    if (response.ok) {
      const result = await response.json()
      return result
    }
  } catch (err) {
    console.error(err)
  }
}

export default createUser
