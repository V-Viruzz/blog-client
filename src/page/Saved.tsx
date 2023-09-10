import LayoutPost from '../components/LayoutPost'
import useMessage from '../hooks/useMessage'
import useLogin from '../hooks/useLogin'
import HomeView from '../components/HomeView'
import useLuxUser from '../hooks/useLuxUser'
import ErrorCard from '../components/ErrorCard'


function Saved(): JSX.Element {
  const { currentUser } = useLogin()
  console.log('🚀 ~ file: Saved.tsx:9 ~ Saved ~ currentUser:', currentUser)
  const useMessageUser = useMessage(currentUser.uid)
  const luxUser = useLuxUser(currentUser.uid)

  return (
    <main>
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

    </main>
  )
}

export default Saved
