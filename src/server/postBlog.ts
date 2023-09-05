interface Message {
  message?: string
  image?: Blob
  user?: string
}

const API_URL: string = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function postBlog({ message, image, user }: Message): Promise<void> {
  const url = user !== undefined ? `user/${user}` : 'luxers'
  const formData = new FormData()

  if (image != null) {
    formData.append('file', image)
  }
  if (message != null) {
    formData.append('text', message)
  }
  formData.append('date', new Date().toISOString())
  console.log(formData)

  const options = {
    method: 'PUT',
    // headers: {
    //   Origin: 'http://localhost:3000'
    // },
    body: formData
  }
  await fetch(`${API_URL}/api/${url}`, options)
    .then(async res => await res.json())
    .then(async res => { console.log(res) })
}

export default postBlog
