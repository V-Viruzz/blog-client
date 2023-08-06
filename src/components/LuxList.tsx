import { type Message } from '../types'

interface Props {
  lux: Message[]
  incrementElements: (num: number) => void
}

function LuxList ({ lux, incrementElements }: Props): JSX.Element {
  return (
    <div className='mt-3'>
      <div className="flex flex-col gap-3 items-center">
        {/* <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9381 13C19.979 12.6724 20 12.3387 20 12C20 7.58172 16.4183 4 12 4C9.49942 4 7.26681 5.14727 5.7998 6.94416M4.06189 11C4.02104 11.3276 4 11.6613 4 12C4 16.4183 7.58172 20 12 20C14.3894 20 16.5341 18.9525 18 17.2916M15 17H18V17.2916M5.7998 4V6.94416M5.7998 6.94416V6.99993L8.7998 7M18 20V17.2916" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div> */}
        {
          lux.length !== 0
            ? lux.map(({ text, image }, index) => {
              let dataURL
              const { imageOptimized } = image
              const isImage = imageOptimized !== null

              if (isImage) {
                const miBuffer = new Uint8Array(imageOptimized.buffer.data)
                const blob = new Blob([miBuffer], { type: imageOptimized.mimetype })

                dataURL = URL.createObjectURL(blob)
              }
              return (
                <div className="border-solid border-zinc-6 border-2 rounded-3 max-w-24rem w-100% p-3" key={index}>
                  {text?.length !== 0 && <p>{text}</p>}
                  {(imageOptimized != null) && <img src={dataURL} alt="Imagen" />}
                </div>
              )
            })
            : null
        }
        <button onClick={() => { incrementElements(4) }}>Load more</button>
      </div>
    </div>
  )
}

export default LuxList
