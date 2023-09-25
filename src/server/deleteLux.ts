import { type Message } from '../types'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const API_URL: string = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

export type DeleteLuxType = (uid: string, id: string) => Promise<void>

export const deleteLux: DeleteLuxType = async (uid, id) => {
  try {
    const options = {
      method: 'DELETE'
    }
    const response = await fetch(`${API_URL}/api/user/${uid}/${id}`, options)
    if (response.ok) {
      const result: Message[] = await response.json()
      console.log('🚀 ~ file: removeLux.ts:19 ~ removeLux ~ result:', result)
    }
  } catch (err) {
    console.error(err)
  }
}
