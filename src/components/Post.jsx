import React, { useState } from 'react'
import AvatarSet from './AvatarSet'
import { close, comment, like, likeB, more, share } from '../assets'
// import 'firebase/firestore';
import db from '../firebase'

const Post = ({ profilePic, user, timestamp, postcontent, postImage, likes }) => {

  const [isLike, setIsLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)



  const increamentLike = () => {
    setIsLike(!isLike)
    setLikeCount(likeCount+(isLike ? -1 : 1))

  }
  return (
    <section className='w-full p-2 rounded-lg flex flex-col items-center justify-center gap-2 bg-white'>

      {/* one */}
      <div className='w-full flex flex-col items-start justify-center border-b-2 pb-2'>
        <div className='min-w-full flex items-center justify-between p-1'>
          <div className='flex items-center gap-4 cursor-pointer'>
            {/* avatar */}
            <AvatarSet source={profilePic} />
            <div className='flex flex-col items-start justify-center'>
              {/* username */}
              <h1 className='font-serif font-semibold'>{user}</h1>
              {/* time */}
              {/* <p>{new Date(timeStamp?.toDate()).toUTCString()}</p> */}
              <p className='font-light text-xs'>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
          </div>

          <div className='flex items-center gap-4 cursor-pointer'>
            {/* ... and x */}
            <div className='hover:bg-[#e4e6eb] w-[35px] h-[35px] flex items-center justify-center rounded-full'>
              <img src={more} alt='...' className='w-[14px] hover:bg-[#e4e6eb]' />
            </div>
            <div className='hover:bg-[#e4e6eb] w-[35px] h-[35px] flex items-center justify-center rounded-full'>
              <img src={close} alt='X' className='w-[14px] hover:bg-[#e4e6eb]' />
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-start justify-center p-2'>
          <p className='leading-6 font-sans font-medium text-lg'>{postcontent}</p>
          {/* <p className='leading-6'>{postcontent2}</p> */}
        </div>
      </div>

      {/* two */}
      <div className='p-1 min-w-full flex flex-col items-center justify-center gap-3'>
        {
          (postImage && <img src={postImage} alt='image' className='w-full shadow-md rounded-md' />)
        }
        <div className='w-full flex items-center justify-between border-b-2 pb-3'>
          <div>
            {/* likes */}
            <p>{likeCount} Likes</p>
          </div>
          <div className='flex gap-4'>
          </div>
        </div>
      </div>

      {/* three */}
      <div className='w-full flex items-center justify-between px-5 select-none'>

        <div onClick={increamentLike} className='cursor-pointer flex items-center justify-center gap-2'>
          <img src={isLike ? likeB : like} alt='like' className='w-[18px] user-drag-none' />
          <p>Like</p>
        </div>

        <div className='cursor-pointer flex items-center justify-center gap-2'>
          <img src={comment} alt='like' className='w-[19px]' />
          <p>Comment</p>
        </div>

        <div className='cursor-pointer flex items-center justify-center gap-2'>
          <img src={share} alt='like' className='w-[18px]' />
          <p>Share</p>
        </div>

      </div>
    </section>
  )
}

export default Post