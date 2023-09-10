import { Link } from "wouter"

function Initial(): JSX.Element {

  return (
    <div className='grid grid-cols-1  justify-between min-h-screen '>
      {/* Header */}
      <header className='h-min'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-1 py-6 sm:px-6 lg:px-8'>
          <div className='flex items-center flex-shrink-0 gap-3'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
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
              <a className='font-bold text-sm decoration-none w-30 h-13 bg-zinc-800 rounded-lg flex items-center justify-center gap-2 transition duration-150 ease-in-out shadow-lg text-white hover:bg-blue-600 hover:text-white '>Get started</a>
            </Link>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Initial
