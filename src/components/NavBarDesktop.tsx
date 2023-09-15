import { Link } from 'wouter'
import SavedIcon from './Icons/SavedIcon'
import HomeIcon from './Icons/HomeIcon'
import ProfileIcon from './Icons/ProfileIcon'
import logo from '../assets/logo.png'


function NavbarDesktop(): JSX.Element {

  return (
    <div className='md:block hidden z-5 animate-in duration-300 ease-out '>

      <div className='w-13rem h-full'>
        <div className='fixed hidden flex flex-col justify-start gap-10 py-2rem px-1.2rem bg-dark-6 h-100% w-13rem'>
          <div className='block flex gap-4 items-center'>
            <img
              className='h-9 w-auto'
              src={logo}
              alt='Workflow'
            />
            <h2 className='text-1.1rem text-inherit font-bold m-0'>Luxer</h2>
          </div>

          <Link href="/saved">
            <a className={`md:after:content-['Saved'] no-underline text-zinc-4 flex items-center gap-2 text-lg`}>
              <SavedIcon width='34px' height='34px' strokeWidth="2.2" />
            </a>
          </Link>

          <Link href="/home">
            <a className={`md:after:content-['Home'] no-underline text-zinc-4 flex items-center gap-2 text-lg`}>
              <HomeIcon width='34px' height='34px' />
            </a>
          </Link>

          <Link href="/profile">
            <a className={`md:after:content-['Profile'] no-underline text-zinc-4 flex items-center gap-2 text-lg`}>
              <ProfileIcon width='34px' height='34px' strokeWidth="1.5" />
            </a>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default NavbarDesktop
