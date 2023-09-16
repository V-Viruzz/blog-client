import { Route, Router, Switch } from 'wouter'
import NavbarDesktop from './components/NavBarDesktop'
import Navbar from './components/Navbar'
import Profile from './page/Profile'
import Saved from './page/Saved'
import Home from './page/Home'
import Initial from './page/Initial'
import './App.css'

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/" component={Initial} />

        <Router>
          <main className='flex h-100%'>
            <NavbarDesktop />
            <div className='w-full flex justify-center'>
              <div className='w-full h-full max-w-2xl md:px-lg px-5% flex flex-col'>
                <Route path="/saved" component={Saved} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
              </div>
            </div>
          </main>

          <Navbar />
        </Router>

      </Switch>

    </>
  )
}

export default App
