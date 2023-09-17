import { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'wouter'
import NavbarDesktop from './components/NavBarDesktop'
import Navbar from './components/Navbar'
import Initial from './page/Initial'
import './App.css'

const Home = lazy(() => import('./page/Home'));
const Saved = lazy(() => import('./page/Saved'));
const Profile = lazy(() => import('./page/Profile'));

function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/" component={Initial} />

        <Router>
          <main className='flex h-100vh'>
            <NavbarDesktop />
            <div className='w-full h-full flex justify-center'>
              <div className='w-full h-full max-w-2xl md:px-lg px-5% flex flex-col'>

                <Route
                  path="/saved"
                  component={() => <Suspense children={<Saved />} />}
                />
                <Route
                  path="/home"
                  component={() => <Suspense children={<Home />} />}
                />
                <Route
                  path="/profile"
                  component={() => <Suspense children={<Profile />} />}
                />

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
