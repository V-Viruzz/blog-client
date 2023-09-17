import LuxList from './LuxList'
import Loading from './Loading'

import { useLuxReturnType } from '../hooks/useLux'

interface Props extends useLuxReturnType { }

const HomeView: React.FC<Props> = ({ lux, isLoading, incrementElements }) => {
  return (
    <>
      {
        !isLoading
          ? <LuxList lux={lux} incrementElements={incrementElements} />
          : <div className='h-full grid place-content-center'><Loading /></div>
      }
    </>
  )
}

export default HomeView
