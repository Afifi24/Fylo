import React,{useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Productive from './components/Productive'
import Testimonials from './components/Testimonials'
import Access from './components/Access'
import Footer from './components/Footer'

const App = () => {

  const [isdark,setIsdark]= useState(false)
  const Toggle = ()=>{
    setIsdark(!isdark)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className=' dark:bg-darkBlue font-opensans dark:text-white min-h-screen '>
      <Header Toggle={Toggle} isdark={isdark}/>
       <Hero/>
       <Features/>
       <Productive/>
       <Testimonials/>
       <Access/>
       <Footer/>
    
    </div>
  )
}

export default App