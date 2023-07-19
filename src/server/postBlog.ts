interface Message {
  message?: string
  image?: Blob
}

const API_URL: string = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function postBlog (date: Message): Promise<void> {
  const { message, image } = date
  const formData = new FormData()
  if (image != null) {
    formData.append('file', image)
  }
  if (message != null) {
    formData.append('message', message)
  }
  formData.append('date', new Date().toString())

  const options = {
    method: 'POST',
    // headers: {
    //   Origin: 'http://localhost:3000'
    // },
    body: formData
  }
  await fetch(`${API_URL}/luxear`, options)
    .then(async res => await res.json())
    .then(async res => { console.log(res) })
}

export default postBlog
