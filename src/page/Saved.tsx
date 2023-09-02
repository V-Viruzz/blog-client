import HomeView from '../components/HomeView'
import LayoutPost from '../components/LayoutPost'
import useMessage from '../hooks/useMessage'

function Saved (): JSX.Element {
  const useMessageUser = useMessage()

  return (
    <main>
      <LayoutPost {...useMessageUser}/>
      <HomeView />
    </main>
  )
}

export default Saved
