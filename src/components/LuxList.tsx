import { type Message } from '../types'

interface Props {
  lux: Message[]
  incrementElements: (num: number) => void
}

function LuxList({ lux, incrementElements }: Props): JSX.Element {
  const getImageURL = (imageOptimized: any): string => {
    const base64Image = `data:${imageOptimized.mimetype};base64,${imageOptimized.buffer}`
    return base64Image
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
                {(image.imageOptimized != undefined) && <img src={getImageURL(image.imageOptimized)} alt="Imagen" />}
              </div>
            )
          })
        }
        {
          lux.length
            ? <button onClick={() => { incrementElements(4) }}>Load more</button>
            : null
        }
      </div>
    </div>
  )
}

export default LuxList
