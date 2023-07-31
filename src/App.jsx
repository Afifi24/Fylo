import React,{useState} from 'react'

const App = () => {

  const [isdark,setIsdark]= useState(false)
  const Toggle = ()=>{
    setIsdark(!isdark)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className=' dark:bg-darkBlue font-opensans dark:text-white min-h-screen '>
      <header className='container mx-auto pt-10 md:pt-0  px-6 text-center h-40 md:h-20'>
        {/* dynamic logo */}
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat  h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10">
        </div>
        {/* menu */}
          <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
            <a href="#features" className="hover:text-accentCyan">Features</a>
            <a href="#features" className="hover:text-accentCyan">Testimonials</a>
            {/* dark/light mode button */}
          <button onClick={Toggle} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 ">
           {/* Dark SVG Icon  */}
          <svg
            id="theme-toggle-dark-icon"
            className={`w-5 h-5  ${isdark ? 'hidden': ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          {/* Light SVG Icon  */}
          <svg
            id="theme-toggle-light-icon"
            className={`w-5 h-5  ${isdark ? '': 'hidden'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          </button>
          </div>
          
      </header>
      {/* hero section */}
      <section className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"></section>
      {/* hero container */}
       <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src="/images/illustration-intro.png" alt="" className='mx-auto' />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">All the files in one scure location, assessible anywhere.</h1>
        <p className='max-w-xs mx-auto mb-10 text-sm md:max-w-xl md:text-lg'>
          Fylo stores all your most important files in one secure location.
          Access theme wherever you need, share and collaboration with frieds family, and co-workers
        </p>
       </div>
    </div>
  )
}

export default App