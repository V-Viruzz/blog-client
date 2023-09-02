import { Route } from 'wouter'
import Home from './page/Home'
import Profile from './page/Profile'
import Navbar from './components/Navbar'
import './App.css'
import Saved from './page/Saved'

function App (): JSX.Element {
  return (
    <>
      <Route path="/saved" component={Saved} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />

      <Navbar />
    </>
  )
}

export default App
