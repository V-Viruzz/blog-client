import { useEffect } from 'react'
import gettingLux from '../server/gettingLux'
import useLux from '../hooks/useLux'

function Home (): JSX.Element {
  const { lux, setLux } = useLux()

  useEffect(() => {
    gettingLux()
      .then((res) => {
        if (typeof res === 'undefined') { console.log('res is undefined'); return }
        setLux(res)
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    <div className='mt-3'>
      <div className="flex flex-col gap-3 items-center">
        {
          lux.length !== 0
            ? lux.map(({ text, image }, index) => {
              let dataURL
              const isImage = image !== undefined
              if (isImage) {
                const miBuffer = new Uint8Array(image.buffer.data)
                const blob = new Blob([miBuffer], { type: image.mimetype })

                dataURL = URL.createObjectURL(blob)
              }
              return (
                <div className="border-solid border-zinc-6 border-2 rounded-3 max-w-24rem w-100% p-3" key={index}>
                  {text?.length !== 0 && <p>{text}</p>}
                  {(image != null) && <img src={dataURL} alt="Imagen" />}
                </div>
              )
            })
            : null
        }
      </div>
    </div>
  )
}

export default Home
