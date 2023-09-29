import { Link, useLocation } from 'wouter'
import SavedIcon from './Icons/SavedIcon'
import HomeIcon from './Icons/HomeIcon'
import ProfileIcon from './Icons/ProfileIcon'
import logoExt from '../assets/logo-ext.png'

function NavbarDesktop (): JSX.Element {
  const [location] = useLocation()
  const linkStyle = ' no-underline flex items-center gap-2 text-lg hover:opacity-60 font-semibold'

  return (
    <div className='md:block hidden z-5 animate-in duration-300 ease-out '>

      <div className='w-13rem h-full'>
        <div className='fixed hidden flex flex-col justify-start gap-9 py-2rem px-1.2rem bg-zinc-2 @dark:bg-dark-6 h-100% w-13rem'>
          <div className='block flex items-center'>
            <img
              className='h-auto w-6rem filter-invert @dark:filter-none'
              src={logoExt}
              alt='Workflow'
            />
            {/* <p className='text-1.5rem text-inherit font-bold  m-0'>Luxer</p> */}
          </div>

          <Link href="/saved">
            <a className={`md:after:content-['Saved'] ${linkStyle} ${location === '/saved' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}>
              <SavedIcon
                className={`@dark:text-#8f8f8f ${location === '/saved' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}
                width='30px'
                height='30px'
                strokeWidth="2.2"
              />

            </a>
          </Link>

          <Link href="/home">
            <a className={`md:after:content-['Home'] ${linkStyle} ${location === '/home' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}>
              <HomeIcon
                className={`@dark:text-#8f8f8f ${location === '/home' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}
                width='30px'
                height='30px'
              />
            </a>
          </Link>

          <Link href="/profile">
            <a className={`md:after:content-['Profile']  ${linkStyle} ${location === '/profile' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}>
              <ProfileIcon
                className={`@dark:text-#8f8f8f ${location === '/profile' ? 'text-#000 @dark:text-#fff' : 'text-#8f8f8f'}`}
                width='30px'
                height='30px'
                strokeWidth="1.5"
              />
            </a>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default NavbarDesktop
