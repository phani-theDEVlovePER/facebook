import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Login from './components/Login'
import { useStateValue } from './StateProvider'

const App = () => {
  const [{user}, dispatch]=useStateValue()
  return (
    <div className='bg-[#f0f2f5] min-h-[100dvh] min-w-full relative'>
      {
        (!user) ?
          <Login /> :
          <>
            <Nav />
            <Hero />
          </>
      }
      {/* <Nav/>
      <Hero/> */}
    </div>
  )
}

export default App