import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="max-w-screen-xl h-screen mx-auto md:p-40 p-10">
        <div className="bg-[url('/404.png')] h-full space-y-6 flex flex-col items-center justify-center shadow-xl bg-center bg-cover bg-no-repeat">
        <h2 className='md:text-[150px] leading-normal font-extrabold text-xl'>404</h2>
        <p className='text-sm'>Ooops! Looks like it is not here</p>
        <p className='text-xs'>Keep searching and you will find it one day, we all do!</p>
        <Link
            href="/"
            className='bg-blue-500 text-white font-bold hover:bg-gray-700 rounded-full px-20 py-2'   
        >
            Back to Main Page hh
        </Link>
        </div>
    </div>
  )
}