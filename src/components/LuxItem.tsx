import { useLocation } from 'wouter'
import { type ImageOptimizedType, type ImageData } from '../types'
import MenuLuxIcon from './Icons/MenuLuxIcon'
import TrashIcon from './Icons/TrashIcon'
import { useState } from 'react'

interface LuxItemProps {
  id: string
  text?: string
  image: ImageData
  removeLux: (id: string) => Promise<void>
}

export function LuxItem ({ text, image, id, removeLux }: LuxItemProps): JSX.Element {
  const [location] = useLocation()
  const [hideMenu, setHideMenu] = useState(true)

  const getImageURL = (imageOptimized: ImageOptimizedType): string => {
    return `data:${imageOptimized.mimetype};base64,${imageOptimized.buffer}`
  }

  const handleClickRemove = (): void => {
    removeLux(id)
  }

  return (
    <div className="bg-dark-6 rounded-3 w-100% relative">
      {/* <div className="border-solid border-zinc-7 border-2 rounded-3 w-100% relative"> */}
      {
        location === '/saved'
          ? <button
            className='flex flex-row-reverse absolute right-0 p-1 bg-transparent m-0 border-0 active:border-0'
            onClick={() => {
              setHideMenu(!hideMenu)
            }}
            onMouseLeave={() => {
              setHideMenu(true)
            }}
          >
            <MenuLuxIcon width={20} />
            {
              hideMenu || <div className='b-solid b-1 border-zinc-8  right-0 p-2 bg-dark-6 rounded-2 mr-2 hover:contrast-110 text-4'>
                <button
                  className='flex gap-1 bg-transparent w-auto h-auto p-0 items-center active:border-0'
                  onClick={handleClickRemove}
                >
                  <TrashIcon width={22} height={22} /> Delete
                </button>
              </div>
            }
          </button>
          : null
      }

      <div className='p-3 pr-8'>
        {text?.length !== 0 && text !== undefined && (
          <p className={`m-0 ${image.imageOptimized === null ? '' : 'mb-3'}`}>
            <TextClickableLinks text={text} />
          </p>
        )}
        {(image.imageOptimized != null) && <img src={getImageURL(image.imageOptimized)} alt="Imagen" />}
      </div>
    </div>
  )
}

interface TextClickableLinksProps {
  text: string
}

function TextClickableLinks ({ text }: TextClickableLinksProps): JSX.Element {
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
