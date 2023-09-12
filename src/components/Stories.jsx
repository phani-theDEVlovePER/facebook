import React, { useState } from 'react'
import { status } from '../constants'
import { reelsB, reelsO, stories, storiesO } from '../assets'

const Stories = () => {
    const [active, setActive] = useState("stories")
    const clickHandler = (item) => {
        setActive(item)
    }

    return (
        <section className='w-full h-[18rem] p-1 rounded-lg flex items-center'>
            <div className='min-w-full h-full flex items-center justify-center flex-col'>
                {/* stories */}
                <div className=' w-full flex justify-center items-center'>
                    <div className='h-[3rem] w-full flex items-center justify-center m-2 border-b-2'>
                        <div onClick={() => clickHandler("stories")} className={`cursor-pointer w-[45%] flex flex-col items-center justify-center p-2 m-2 border-b-4 ${active==="stories" && 'border-blue-600'}`}>
                            <img src={storiesO} alt='stories' className={`w-[23px] sm:w-[24px] ${active === "stories" && 'hidden'}`} />
                            <img src={stories} alt='stories' className={`w-[23px] sm:w-[24px] ${active === 'stories' ? 'block' : 'hidden'}`} />
                            <h1 className={active === "stories" ? 'text-[#2e81f4]' : 'text-gray-500'}>Stories</h1>
                        </div>

                        <div onClick={() => clickHandler("reels")} className={`cursor-pointer w-[45%] flex flex-col items-center justify-center p-2 m-2 border-b-4 ${active==="reels" && 'border-blue-600'}`}>
                            <img src={reelsO} alt='reels' className={`w-[23px] sm:w-[24px] ${active === "reels" && 'hidden'}`} />
                            <img src={reelsB} alt='reels' className={`w-[23px] sm:w-[24px] ${active === 'reels' ? 'block' : 'hidden'}`} />
                            <h1 className={active === "reels" ? 'text-[#2e81f4]' : 'text-gray-500'}>Reels</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full  overflow-x-auto overscroll-contain scrollbar-hide'>
                    <div className='flex'>
                        {
                            status.map(
                                (stat) => (
                                    <div key={stat.id} className='flex flex-col items-center m-2 min-w-[7rem] h-[12.5rem] shadow-md relative overflow-hidden rounded-xl'>
                                        <img src={stat.pic} className='w-[7rem] h-[14rem] aspect-video object-cover rounded hover:scale-105 ease-in-out duration-500 ' />
                                        <div className='absolute bottom-0 min-w-[7.5rem] flex items-center justify-center h-12 rounded-t-lg'>
                                            <h2 className='text-white  top-[10rem] font-semibold font-mono'>{stat.info}</h2>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stories