import { Link, useLocation } from 'wouter'
import SavedIcon from './Icons/SavedIcon'
import HomeIcon from './Icons/HomeIcon'
import ProfileIcon from './Icons/ProfileIcon'
import logo from '../assets/logo.png'

function Navbar (): JSX.Element {
  const [location] = useLocation()

  return (
    <div className='@dark:bg-dark-6 bg-zinc-2 md:hidden z-5 bottom-0 py-sm left-0 right-0 fixed justify-evenly px-sm animate-in duration-300 ease-out flex md:right-auto md:top-0 md:flex-col md:justify-start md:gap-10 md:w-12rem md:py-2rem md:px-1.2rem '>
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
          <SavedIcon
            className={`@dark:text-#8f8f8f ${location === '/saved' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}
            width='30px'
            height='30px'
            strokeWidth="2.2"
          />
        </a>
      </Link>

      <Link href="/home">
        <a className={'no-underline text-zinc-4 flex items-center'}>
          <HomeIcon
            className={`@dark:text-#8f8f8f ${location === '/home' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}
            width='30px'
            height='30px'
          />
        </a>
      </Link>

      <Link href="/profile">
        <a className={'no-underline text-zinc-4 flex items-center'}>
          <ProfileIcon
            className={`@dark:text-#8f8f8f ${location === '/profile' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}
            width='30px'
            height='30px'
            strokeWidth="1.5"
          />
        </a>
      </Link>

    </div>
  )
}

export default Navbar
