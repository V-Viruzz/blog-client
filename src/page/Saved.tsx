import LayoutPost from '../components/LayoutPost'
import useMessage from '../hooks/useMessage'
import useLogin from '../hooks/useLogin'
import HomeView from '../components/HomeView'
import useLux from '../hooks/useLux'
import ErrorCard from '../components/ErrorCard'

function Saved(): JSX.Element {
  const { currentUser } = useLogin()
  const useMessageUser = useMessage(currentUser.uid)
  const luxUser = useLux(currentUser.uid)

  return (
    <>
      {
        Object.keys(currentUser).length !== 0
          ?
          <>
            <h2 className='text-center'>Saved lux</h2>
            <LayoutPost {...useMessageUser} />
            <HomeView {...luxUser} />
          </>
          : <ErrorCard />
      }
    </>
  )
}

export default Saved
