import { Link, Route } from 'wouter'
import Home from './page/Home'
import './App.css'

function App (): JSX.Element {
  return (
    <>
      <Route path="/saved">About Us</Route>
      <Route path="/home" component={Home} />

      <div className='z-10 border-t md:border-none bottom-0 md:bottom-lg  py-sm left-0 right-0 fixed md:sticky justify-center px-sm md:p-0 md:pt-xl animate-in slide-in-from-bottom-4 duration-300 ease-out md:flex md:justify-center bottom-[64px] md:bottom-0 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain/60 dark:divide-borderMainDark/60 ring-borderMain dark:ring-borderMainDark bg-dark'>

        <Link href="/home">
          <a className="link">Home</a>
        </Link>
        <Link href="/saved">
          <a className="link">Saved</a>
        </Link>

      </div>
    </>
  )
}

export default App
