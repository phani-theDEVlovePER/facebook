import React from 'react'
import { options } from '../constants'
import OptionsControl from './OptionsControl'
import Stories from './Stories'
import Entry from './Entry'
import Feeds from './Feeds'
import Iframe from './Iframe'
import AvatarSet from './AvatarSet'
import { useStateValue } from '../StateProvider'

const Hero = () => {

  const [{ user }, dispatch] = useStateValue()

  return (
    <section className='min-h-[90vh] min-w-full'>


      {/* main section */}
      <div className='min-w-full flex justify-center items-start pt-6'>


        {/* first section */}
        <div className='min-w-[25%] hidden sm:block'>
          <div className='fixed'>
            <div className='flex gap-4 justify-start items-center m-4 bg-[#e4e6eb] hover:bg-[#d1d1d2] p-2 rounded-xl cursor-pointer'>
              <AvatarSet source={user ? user.photoURL : null} />
              <h1 className='font-serif'>{user ? user.displayName : ''}</h1>
            </div>
            <div>
              {
                options.map(
                  (option) => (
                    <OptionsControl key={option.id} {...option} />
                  )
                )
              }
            </div>
          </div>
        </div>


        {/* second section */}
        <div className='min-w-[65%] min-h-[18rem] ss:min-w-[45%] flex flex-col justify-center items-center gap-5'>

          {/* stories */}
          <div className='w-[87%] border-2 shadow-xl rounded-xl p-1 bg-white'>
            <Stories />
          </div>

          {/* input's */}
          <div className='w-[87%] border-2 shadow-xl rounded-xl p-1 bg-white'>
            <Entry />
          </div>

          {/* feeds */}
          <div className='w-[87%] border-2 shadow-xl rounded-xl p-1 mb-2 pb-5'>
            <Feeds />
          </div>

        </div>


        {/* third section */}
        <div className='h-screen min-w-[35%] ss:min-w-[30%] hidden md:block sticky top-1'>
          {/* iframe */}
          <Iframe />
        </div>

      </div>
    </section>
  )
}

export default Hero