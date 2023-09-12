import React, { useEffect, useRef, useState } from 'react'
import { close, photos } from '../assets'

const Modal = ({ onDataUpdate, handleSetUrls }) => {
    const [modal, setModal] = useState('x')  //sending data to parent (Entry.jsx)
    const [urls, setUrls] = useState("")
    const [image, setImage] = useState(null)

    const sendDataToParent = () => {
        onDataUpdate(modal)
    }

    // const parentFunc=()=>{
    //     handleSetUrls(urls)
    // }

    // to set urls
    const formHandler = (e) => {
        e.preventDefault()
        handleSetUrls(urls)
        setModal('x')
        sendDataToParent()
    }

    // to set images..
    const imageHandler = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    return (
        <section className='min-w-full flex items-center justify-center relative'>
            <section
                className={`w-[20rem] h-[15rem] rounded-lg shadow-lg m-2 p-2  bg-gray-100 fixed top-[15rem] left-[15%] ss:left-[20%] sm:left-[30%] md:left-[30%]  z-50`}
            >
                <div className='min-w-full h-full '>
                    <div className='w-full  flex flex-col items-center justify-start gap-8'>
                        {/* close button */}
                        <div onClick={sendDataToParent} className='w-full h-4 '>
                            <button
                                onClick={() => setModal('x')}
                                className='min-w-full h-4  flex justify-end items-center'>
                                <img src={close} alt='X' className='w-[15px] ' />
                            </button>
                        </div>
                        <div className='flex items-center justify-center flex-col gap-2 '>

                            {/* input text/url */}
                            <input
                                onChange={(e) => setUrls(e.target.value)}
                                type='text'
                                placeholder="Enter Image URL..."
                                className='px-4 h-8 w-[14rem]  sm:w-[19rem] rounded-[5rem] border-2 border-gray-400 outline-blue-500'
                            ></input>

                            <h1 className='font-light  text-sm '>OR</h1>

                            {/* input files button */}
                            <div className='w-[55%] flex items-center justify-center gap-1  m-1 p-2  bg-gray-400 hover:bg-gray-500 rounded-md'>
                                <input
                                    onChange={imageHandler}
                                    type="file"
                                    accept="image/*"
                                    id="file"
                                    className='hidden'
                                />
                                <label htmlFor="file" className='w-[20rem] flex items-center justify-center gap-3 cursor-pointer hover:text-white'>
                                    <img src={photos} alt='live' className='w-[25px]' />
                                    <h1 className='font-normal   '>Search Files</h1>
                                </label>
                            </div>

                            {/* submit button */}
                            <button
                                className='w-[45%] flex items-center justify-center gap-3 m-1 p-1  bg-gray-400 hover:bg-gray-500 rounded-xl'
                                onClick={formHandler}
                            >submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Modal