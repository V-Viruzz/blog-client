import { type Message } from '../types'

interface Props {
  lux: Message[]
  incrementElements: (num: number) => void
}

function LuxList ({ lux, incrementElements }: Props): JSX.Element {
  const getImageURL = (imageOptimized: any): string => {
    const miBuffer = new Uint8Array(imageOptimized.buffer.data)
    const blob = new Blob([miBuffer], { type: imageOptimized.mimetype })
    return URL.createObjectURL(blob)
  }

  return (
    <div className='py-3 pb-19'>
      <div className="flex flex-col gap-3 items-center">
        {
          lux.map(({ text, image }, index) => {
            return (
              <div
                className="border-solid border-zinc-6 border-2 rounded-3 max-w-24rem w-100% p-3"
                key={index}>
                {text?.length !== 0 && <p>{text}</p>}
                {(image !== undefined) && <img src={getImageURL(image.imageOptimized)} alt="Imagen" />}
              </div>
            )
          })
        }
        <button onClick={() => { incrementElements(4) }}>Load more</button>
      </div>
    </div>
  )
}

export default LuxList
