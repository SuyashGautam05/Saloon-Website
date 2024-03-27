import { Link } from "react-router-dom"

const Failure = () => {
  return (
    <>

<section className="h-screen flex justify-center items-center pt-24 dark:bg-gray-900">
  <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
      Looks like your payment is <span className="text-[#537f3c] font-bold">Failed</span>
    </h2>
   
    <div className="inline-flex w-full mt-6 sm:w-auto">
      <Link to="/" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-[#537f3c] rounded-lg hover:bg-transparant focus:ring focus:ring-[#537f3c] focus:ring-opacity-80">
        Go to Home
      </Link>
    </div>
  </div>
</section>
 </>
  )
}

export default Failure
