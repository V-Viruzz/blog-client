import { Link } from "wouter"
import logo from '../../public/logo.png'

function Initial(): JSX.Element {

  return (
    <div className='grid grid-cols-1  justify-between min-h-screen '>
      {/* Header */}
      <header className='h-min'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-1 py-6 sm:px-6 lg:px-8'>
          <div className='flex items-center flex-shrink-0 gap-4'>
            <img
              className='h-9 w-auto'
              src={logo}
              alt='Workflow'
            />
            <h2 className='text-sm text-inherit font-bold'>Luxer</h2>
          </div>
          <div className='block'>
            <div className='flex items-center justify-end'>
              <div className='md:block'>
                <Link href='/profile'>
                  <a className="decoration-none text-sm text-inherit">
                    Log in
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main className='flex items-center justify-center h-full'>

        <div className='h-full flex flex-col gap-10'>
          <h1 className='text-2xl font-bold text-center w-60'>A place to save messages</h1>
          <div className='flex justify-center'>
            <Link href='home'>
              <a className='font-bold text-sm decoration-none w-30 h-13 bg-zinc-800 rounded-lg flex items-center justify-center gap-2 transition duration-200 ease-in-out shadow-lg text-white hover:bg-white hover:text-black '>Get started</a>
            </Link>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Initial
