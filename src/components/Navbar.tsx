import { Link } from 'wouter'
import SavedIcon from './Icons/SavedIcon'
import HomeIcon from './Icons/HomeIcon'
import ProfileIcon from './Icons/ProfileIcon'

interface LinkContainerProps {
  children: React.ReactNode
  content: string
}

function LinkContainer (props: LinkContainerProps): JSX.Element {
  return (
    <a className={`md:after:content-['${props.content}'] no-underline text-zinc-4 flex items-center gap-2 text-lg`} {...props}>
      {props.children}
    </a>
  )
}

function Navbar (): JSX.Element {
  return (
    <div className='z-10 bottom-0 py-sm left-0 right-0 fixed justify-evenly px-sm animate-in duration-300 ease-out bg-dark-4 flex'>

      <Link href="/saved">
        <LinkContainer content='Saved'>
          <SavedIcon width='34px' height='34px' strokeWidth="2.2" />
        </LinkContainer>
      </Link>

      <Link href="/home">
        <LinkContainer content='Home'>
          <HomeIcon width='34px' height='34px' />
        </LinkContainer>
      </Link>

      <Link href="/profile">
        <LinkContainer content='Profile'>
          <ProfileIcon width='34px' height='34px' strokeWidth="1.5" />
        </LinkContainer>
      </Link>

    </div>
  )
}

export default Navbar
