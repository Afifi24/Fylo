import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
       <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src="/images/illustration-intro.png" alt="" className='mx-auto' />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">All the files in one scure location, assessible anywhere.</h1>
        <p className='max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg'>
          Fylo stores all your most important files in one secure location.
          Access theme wherever you need, share and collaboration with frieds family, and co-workers
        </p>
        <button className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95 duration-200">Get Started</button>
       </div>
       </section>
  )
}

export default Hero