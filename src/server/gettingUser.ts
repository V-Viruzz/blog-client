import { type Message } from '../types'
const API_URL: string = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function gettingUser(uid: string | undefined): Promise<Message[] | undefined> {

  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`${API_URL}/api/user/${uid}`, options)

    if (response.ok) {
      const result = await response.json()

      return result.myLux.reverse()
    }
  } catch (err) {
    console.error(err)
  }
}

export default gettingUser
