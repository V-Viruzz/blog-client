import { Link, useLocation } from 'wouter'
import SavedIcon from './Icons/SavedIcon'
import HomeIcon from './Icons/HomeIcon'
import ProfileIcon from './Icons/ProfileIcon'
import logo from '../assets/logo.png'

function Navbar (): JSX.Element {
  const [location] = useLocation()
  console.log('🚀 ~ file: Navbar.tsx:9 ~ Navbar ~ location:', location)

  return (
    <div className='md:hidden z-5 bottom-0 py-sm left-0 right-0 fixed justify-evenly px-sm animate-in duration-300 ease-out bg-dark-6 flex md:right-auto md:top-0 md:flex-col md:justify-start md:gap-10 md:w-12rem md:py-2rem md:px-1.2rem '>
      <div className='hidden md:block md:flex md:gap-4 md:items-center'>
        <img
          className='h-9 w-auto'
          src={logo}
          alt='Workflow'
        />
        <h2 className='text-1.1rem text-inherit font-bold m-0'>Luxer</h2>
      </div>
      <Link href="/saved">
        <a className={'no-underline text-zinc-4 flex items-center'}>
          <SavedIcon width='30px' height='30px' strokeWidth="2.2" stroke={location === '/saved' ? '#fff' : '#8f8f8f' } />
        </a>
      </Link>

      <Link href="/home">
        <a className={'no-underline text-zinc-4 flex items-center'}>
          <HomeIcon width='30px' height='30px' fill={location === '/home' ? '#fff' : '#8f8f8f' } />
        </a>
      </Link>

      <Link href="/profile">
        <a className={'no-underline text-zinc-4 flex items-center'}>
          <ProfileIcon width='30px' height='30px' strokeWidth="1.5" stroke={location === '/profile' ? '#fff' : '#8f8f8f' } />
        </a>
      </Link>

    </div>
  )
}

export default Navbar
