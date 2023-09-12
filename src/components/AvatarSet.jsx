import React from 'react'
import { avatar } from '../assets'

const AvatarSet = ({ source }) => {
  return (
    <div className='w-[37px] cursor-pointer'>
      {
        source ? <img className='rounded-full aspect-square' src={source} alt='pic' /> : <img src={avatar} alt='pic' />
      }
    </div>
  )
}

export default AvatarSet