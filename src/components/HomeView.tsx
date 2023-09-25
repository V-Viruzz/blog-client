import LuxList from './LuxList'
import Loading from './Loading'

import { type useLuxReturnType } from '../hooks/useLux'

interface Props extends useLuxReturnType { }

const HomeView: React.FC<Props> = ({ lux, isLoading, incrementElements, removeLux }) => {
  return (
    <>
      {
        !isLoading
          ? <LuxList lux={lux} incrementElements={incrementElements} removeLux={removeLux} />
          : <div className='h-full grid place-content-center'><Loading /></div>
      }
    </>
  )
}

export default HomeView
