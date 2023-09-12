import React, { useEffect, useState } from 'react'
import { avatar, feelings, live, photos, send } from '../assets'
import AvatarSet from './AvatarSet'
import { useStateValue } from '../StateProvider'
import db from '../firebase'
import firebase from 'firebase'
import Modal from './Modal'

const Entry = () => {

  const [{ user }, dispatch] = useStateValue()
  const [data, setData] = useState("")
  const [urls, setUrls] = useState("")
  const [modalOpen, setModalOPen] = useState('x') //data from child(modal) to parent 

  const handleSetModalOpen = (data) => {  //handling data from child
    setModalOPen(data)
  }

  const handleSetUrls=(data)=>{
    setUrls(data)
  }

  const formHandler = (e) => {
    e.preventDefault()

    db.collection("posts").add({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      user: user.displayName,
      postcontent: data,
      postImage: urls,
      // likes:user.likes,
      // comments:user.comments,
      // shares:user.shares,
    });
    console.log('Post added to database')
    setData("")
    setUrls("")
  }


  return (
    <section className='w-full h-[7rem] p-1 rounded-lg flex items-center'>
      <div className='min-w-full flex flex-col justify-center items-center'>

        {/* input */}
        <div className='h-[45%] min-w-full flex justify-center items-center gap-4 border-b-2 pb-3'>

          {/* avatar */}
          <AvatarSet source={user ? user.photoURL : null} />

          {/* input-text */}
          <div className='w-[80%] hover:bg-[#e4e6eb] bg-[#eff2f5] rounded-3xl'>
            <form className='flex pr-4'>
              <input
                type="text"
                placeholder={`What\'s on your mind, ${user ? user.displayName : ''}?`}
                className='w-full border border-none outline-none p-2 font-medium bg-transparent pl-5'
                value={data}
                onChange={(event) => setData(event.target.value)}
              >
              </input>
              <button onClick={formHandler}  >
                <img src={send} alt='-->' className='w-[20px]'/>
              </button>
            </form>
          </div>
        </div>


        {/* controls */}
        <div className='h-[45%] w-full flex justify-center items-center gap-9 cursor-pointer pt-1'>

          {/* live */}
          <div className='w-[25%] flex items-center justify-center gap-3 m-1 p-1  hover:bg-[#e4e6eb] rounded-md'>
            <img src={live} alt='live' className='w-[25px]' />
            <h1 className='font-medium hidden lg:block'>Live video</h1>
          </div>

          {/* photos */}
          <div
            onClick={() => setModalOPen('o')}
            className='w-[25%] flex items-center justify-center gap-3 m-1 p-1  hover:bg-[#e4e6eb] rounded-md'>

            <div
              className='flex items-center justify-center gap-3 cursor-pointer'>
              <img src={photos} alt='pics' className='w-[25px]' />
              <h1 className='font-medium hidden lg:block'>Photo/video</h1>
            </div>
          </div>
          <div className={(modalOpen == 'o') ? 'block' : 'hidden'}>
            <Modal onDataUpdate={handleSetModalOpen} handleSetUrls={handleSetUrls}/>
          </div>

          {/* feelings */}
          <div className='w-[25%] flex items-center justify-center gap-3 m-1 p-1 lg:px-[3.2rem]  hover:bg-[#e4e6eb] rounded-md'>
            <img src={feelings} alt='feelings' className='w-[25px]' />
            <h1 className='font-medium hidden lg:block'>Feeling/activity</h1>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Entry