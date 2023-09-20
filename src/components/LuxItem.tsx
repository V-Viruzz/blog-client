import { type ImageOptimizedType, type ImageData } from '../types'
import MenuLuxIcon from './Icons/MenuLuxIcon'

interface LuxItemProps {
  id: string
  text?: string
  image: ImageData
}

export function LuxItem ({ text, image, id }: LuxItemProps): JSX.Element {
  const getImageURL = (imageOptimized: ImageOptimizedType): string => {
    return `data:${imageOptimized.mimetype};base64,${imageOptimized.buffer}`
  }

  const handleClick = (): void => {
    console.log(id)
  }

  return (
    <div className="border-solid border-zinc-7 border-2 rounded-3 w-100% relative">
      <button
        className='absolute right-0 p-1 bg-transparent m-0 border-0 active:border-0'
        onClick={handleClick}
        >
        <MenuLuxIcon width={20} />
      </button>
      <div className='p3'>
        {text?.length !== 0 && text !== undefined && (
          <p className={`m-0 ${image === null ? '' : 'mb-3'}`}>
            <TextClickableLinks text={text} />
          </p>
        )}
        {(image.imageOptimized != null) && <img src={getImageURL(image.imageOptimized)} alt="Imagen" />}
      </div>
    </div>
  )
}

interface MessageViewProps {
  text: string
}

function TextClickableLinks ({ text }: MessageViewProps): JSX.Element {
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

  return <>{textoConEnlaceClickeable}</>
}
