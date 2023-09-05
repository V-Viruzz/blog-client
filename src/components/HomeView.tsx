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
          : <Loading />
      }
    </>
  )
}

export default HomeView
