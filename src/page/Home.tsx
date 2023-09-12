import LayoutPost from '../components/LayoutPost'
import HomeView from '../components/HomeView'
import useMessage from '../hooks/useMessage'
import useLux from '../hooks/useLux'

function Home(): JSX.Element {
  const messageLux = useMessage()
  const lux = useLux('home')

  return (
    <main>
      <h2 className='text-center'>Post lux</h2>
      <LayoutPost {...messageLux} />
      <HomeView {...lux} />
    </main>
  )
}

export default Home
