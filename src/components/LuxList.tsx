import { type ImageOptimizedType, type Message } from '../types'

interface Props {
  lux: Message[]
  incrementElements: (num: number) => void
}

function LuxList ({ lux, incrementElements }: Props): JSX.Element {
  const getImageURL = (imageOptimized: ImageOptimizedType): string => {
    return `data:${imageOptimized.mimetype};base64,${imageOptimized.buffer}`
  }

  return (
    <div className='py-3 pb-19 md:pb-5'>
      <div className="flex flex-col gap-3 items-center">
        {
          lux.map(({ text, image }, index) => {
            return (
              <div
                className="border-solid border-zinc-7 border-2 rounded-3 w-100% p-3"
                key={index}>
                {
                  text?.length !== 0 && text !== undefined &&
                  // <p className={`m-0 ${image.imageOptimized === null ? '' : 'mb-3'}`}>
                  //   {text}
                  // </p>
                  <MessageView text={text} />
                }
                {(image.imageOptimized != null) && <img src={getImageURL(image.imageOptimized)} alt="Imagen" />}
              </div>
            )
          })
        }
        {
          (lux.length > 0)
            ? <button onClick={() => { incrementElements(4) }}>Load more</button>
            : null
        }
      </div>
    </div>
  )
}

function MessageView ({ text }: { text: string }): JSX.Element {
  const regex = /(https?:\/\/[^\s]+)/g
  const textoConEnlaceClickeable = text.split(regex).map((item, index) => {
    if (item.match(regex) != null) {
      return (
        <a
          className='decoration-none text-#11b7d4'
          key={index}
          href={item}
          target="_blank"
          rel="noopener noreferrer"
          >
          {item}
        </a>
      )
    } else {
      return item
    }
  })

  return <div>{textoConEnlaceClickeable}</div>
}

export default LuxList
