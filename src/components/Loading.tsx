
function Loading(): JSX.Element {
  return (
    <div className='flex items-center justify-center'>
      <div className='border-solid border-white border-3 rounded-50% w-60px h-60px border-t-transparent animate-spin after:content-none after:absolute after:rounded-inherit before:w-100% before:h-100% before:bg-gradient-linear'></div>
    </div>
  )
}

export default Loading
