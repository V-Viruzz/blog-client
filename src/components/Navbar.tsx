import { Link } from 'wouter'
import SavedIcon from './Icons/SavedIcon'
import HomeIcon from './Icons/HomeIcon'
import ProfileIcon from './Icons/ProfileIcon'
import logo from '../assets/logo.png'

// interface LinkContainerProps {
//   children: React.ReactNode
//   content: string
// }

// function LinkContainer(props: LinkContainerProps): JSX.Element {
//   return (
//     <a className={`md:after:content-["${props.content}"] no-underline text-zinc-4 flex items-center gap-2 text-lg`}>
//       {props.children}
//     </a>
//   )
// }

function Navbar(): JSX.Element {

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
  )
}

export default Navbar
