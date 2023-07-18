import { type Message } from '../types'
const url = 'http://localhost:3000/api/lux'

async function gettingLux (): Promise<Message[] | undefined> {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const result: Message[] = await response.json()
      return result
    }
  } catch (err) {
    console.error(err)
  }
}

export default gettingLux
