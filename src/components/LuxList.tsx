import { type Message } from '../types'

import { LuxItem } from './LuxItem'

interface Props {
  lux: Message[]
  incrementElements: (num: number) => void
}

function LuxList ({ lux, incrementElements }: Props): JSX.Element {
  return (
    <div className='py-3 pb-19 md:pb-5'>
      <div className="flex flex-col gap-3 items-center">
        {
          lux.map((item, index) => <LuxItem key={index} {...item} />)
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

export default LuxList
