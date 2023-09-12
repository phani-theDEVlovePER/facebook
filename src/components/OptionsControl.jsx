import React from 'react'

const OptionsControl = ({pic, info}) => {
  return (
    <section>
        <div className='flex gap-4 justify-start items-center m-4  hover:bg-[#e4e6eb] p-2 rounded-xl cursor-pointer'>

            <div className='w-[37px] cursor-pointer'>
                <img src={pic} alt='pic'/>
            </div>

            <div>
                <h2>{info}</h2>
            </div>

        </div>
    </section>
  )
}

export default OptionsControl