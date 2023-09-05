// import HomeView from '../components/HomeView'
import LayoutPost from '../components/LayoutPost'
import useMessage from '../hooks/useMessage'
import useLogin from '../hooks/useLogin'
import HomeView from '../components/HomeView'
import useLux from '../hooks/useLux'

function Saved(): JSX.Element {
  const { currentUser } = useLogin()
  const useMessageUser = useMessage(currentUser.uid)
  const useLuxUser = useLux()

  return (
    <main>
      <LayoutPost {...useMessageUser} />
      <HomeView {...useLuxUser} />
    </main>
  )
}

export default Saved
