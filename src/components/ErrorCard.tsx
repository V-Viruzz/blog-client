import { Link } from "wouter";


function ErrorCard(): JSX.Element {
  return (
    <div className='h-100vh grid place-content-center'>
      <div className='w-16rem h-8rem border-solid border-2 border-zinc-5 rounded-lg flex flex-col items-center justify-evenly'>
        <h4 className='m-0'>You need to log in</h4>
        <Link href="/profile">
          <a className="w-40% bg-blue-9 border-0 p-2 text-center rounded-lg text-white decoration-none">log in</a>
        </Link>
      </div>
    </div>
  )
}

export default ErrorCard
