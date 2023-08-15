import useLux from '../hooks/useLux'
import LuxList from './LuxList'
import Loading from './Loading'

function HomeView (): JSX.Element {
  const { lux, isLoading, incrementElements } = useLux()

  return (
    <>
      {
        !isLoading
          ? <LuxList lux={lux} incrementElements={incrementElements}/>
          : <Loading />
      }

    </>
  )
}

export default HomeView
