import { type Message } from '../types'
import { LuxItem } from './LuxItem'
import DownArrowIcon from './Icons/DownArrowIcon'

interface Props {
  lux: Message[]
  incrementElements: (num: number) => void
  removeLux: (id: string) => Promise<void>
}

function LuxList ({ lux, incrementElements, removeLux }: Props): JSX.Element {
  return (
    <div className='py-3 pb-19 md:pb-5'>
      <div className="flex flex-col gap-3 items-center">
        {
          lux.map((item, index) => <LuxItem key={index} removeLux={removeLux} {...item} />)
        }
        {
          (lux.length > 0)
            ? <button
            className='grid place-content-center p-1 rounded-36'
            onClick={() => { incrementElements(4) }}>
              <DownArrowIcon width={28} height={28}/>
            </button>
            : null
        }
      </div>
    </div>
  )
}

export default LuxList
