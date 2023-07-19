import { type Message } from '../types'
// const url = 'http://localhost:3000/api/lux'
const API_URL: string = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function gettingLux (): Promise<Message[] | undefined> {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`${API_URL}/api/lux`, options)

    if (response.ok) {
      const result: Message[] = await response.json()
      return result
    }
  } catch (err) {
    console.error(err)
  }
}

export default gettingLux
