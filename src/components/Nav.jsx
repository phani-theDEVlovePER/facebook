import React, { useState } from 'react'
import '../AppStyles.css'
import { facebook, fbLogo } from '../constants'
import { avatar, chatB, chatO, friendsB, friendsO, gameB, gameO, groupB, groupO, homeB, homeO, marketB, marketO, menu, notificationB, notificationO, plus, search, watchB, watchO } from '../assets'
import AvatarSet from './AvatarSet'
import { useStateValue } from '../StateProvider'

const Nav = () => {

  const [{ user }, dispatch] = useStateValue()

  const [active, setActive] = useState("home")
  const clickHandler = (item) => {
    setActive(item)
  }

  const [activeT, setActiveT] = useState(null)
  const clickHandlerT = (item) => {
    setActiveT(item)
  }

  return (
    <section className='min-w-full h-[5.8rem] sm:h-[3.5rem] bg-white border-b-2 border-[#e0e2e5] sticky top-0 z-50'>
      <div className='block sm:flex justify-between items-center w-full h-full'>

          <div className='flex justify-between sm:justify-start items-center h-11 sm:ml-2 p-2 sm:gap-2 lg:gap-x-3'>
            <div className='w-[8rem] h-6 m-1 cursor-pointer sm:hidden'>
              <img src={facebook} alt='facebook' className='h-[92%] flex items-center justify-center' />
            </div>
            <div className='hidden sm:block'>
              <img className='w-[40px] cursor-pointer hidden sm:block' src={fbLogo} alt='fbLogo' />
            </div>

            <div className='flex items-center gap-2 w-[5rem]'>
              <div className='bg-[#e4e6eb] w-9 h-9 rounded-full flex items-center justify-center'>
                <img src={search} alt='🔍' className='w-5' />
              </div>
              <div className='bg-[#e4e6eb] w-9 h-9 rounded-full flex items-center justify-center sm:hidden'>
                <img src={menu} alt='menu' className='w-5' />
              </div>
            </div>
          </div>

          <div className='flex gap-x-7 lg:gap-x-24 p-4 xs:p-0 h-11 items-center justify-center sm:ml-16'>

            {/* home */}
            <div onClick={() => clickHandler("home")} className={`flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg`}>
              <img src={homeO} alt='home' className={`w-[23px] sm:w-[24px] ${active === "home" && 'hidden'}`} />
              <img src={homeB} alt='home' className={`w-[23px] sm:w-[24px] ${active === 'home' ? 'block' : 'hidden'}`} />
            </div>

            {/* friends  */}
            <div onClick={() => { clickHandler('friends') }} className='flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg'>
              <img src={friendsO} alt='peopleO' className={`w-[23px] sm:w-[24px] ${active === "friends" && 'hidden'}`} />
              <img src={friendsB} alt='peopleO' className={`w-[23px] sm:w-[24px] ${active === 'friends' ? 'block' : 'hidden'}`} />
            </div>

            {/* market */}
            <div onClick={() => { clickHandler('market') }} className='items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg hidden sm:flex'>
              <img src={marketO} alt='peopleO' className={`w-[23px] sm:w-[24px] ${active === "market" && 'hidden'}`} />
              <img src={marketB} alt='peopleO' className={`w-[23px] sm:w-[24px] ${active === 'market' ? 'block' : 'hidden'}`} />
            </div>

            {/* game */}
            <div onClick={() => { clickHandler('game') }} className='hidden sm:flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg'>
              <img src={gameO} alt='peopleO' className={`w-[23px] sm:w-[24px] ${active === "game" && 'hidden'}`} />
              <img src={gameB} alt='peopleO' className={`w-[23px] sm:w-[24px] ${active === 'game' ? 'block' : 'hidden'}`} />
            </div>

            {/* messanger */}
            <div onClick={() => { clickHandler('chat') }} className='flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg sm:hidden'>
              <img src={chatO} alt='chat' className={`w-[23px] sm:w-[24px] ${active === "chat" && 'hidden'}`} />
              <img src={chatB} alt='chat' className={`w-[23px] sm:w-[24px] ${active === 'chat' ? 'block' : 'hidden'}`} />
            </div>

            {/* watching */}
            <div onClick={() => { clickHandler('watch') }} className='flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg sm:hidden'>
              <img src={watchO} alt='tvO' className={`w-[23px] sm:w-[24px] ${active === "watch" && 'hidden'}`} />
              <img src={watchB} alt='tvO' className={`w-[23px] sm:w-[24px] ${active === 'watch' ? 'block' : 'hidden'}`} />
            </div>

            {/* notificationB */}
            <div onClick={() => { clickHandler('bell') }} className='flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg sm:hidden'>
              <img src={notificationO} alt='notificationO' className={`w-[23px] sm:w-[24px] ${active === "bell" && 'hidden'}`} />
              <img src={notificationB} alt='notificationO' className={`w-[23px] sm:w-[24px] ${active === 'bell' ? 'block' : 'hidden'}`} />
            </div>

            {/* group */}
            <div onClick={() => { clickHandler('group') }} className='flex items-center justify-center hover:bg-[#eff2f5] h-[35px] w-[45px] cursor-pointer rounded-lg sm:hidden'>
              <img src={groupO} alt='groupO' className={`w-[23px] sm:w-[24px] mt-2 ${active === "group" && 'hidden'}`} />
              <img src={groupB} alt='groupO' className={`w-[23px] sm:w-[24px] mt-2 ${active === 'group' ? 'block' : 'hidden'}`} />
            </div>

          </div>

          <div className='gap-x-2 lg:gap-x-4 p-4 xs:p-0 h-11 items-center justify-center hidden sm:flex sm:mr-1'>

            {/* plus */}
            <div onClick={() => { clickHandlerT(null) }} className='flex items-center justify-center hover:bg-[#eff2f5] bg-[#e4e6eb] rounded-full w-9 h-9 cursor-pointer'>
              <img src={plus} alt='add' className='w-[23px]' />
            </div>

            {/* messanger */}
            <div onClick={() => { clickHandlerT('chat1') }} className='flex items-center justify-center hover:bg-[#eff2f5] bg-[#e4e6eb] rounded-full w-9 h-9 cursor-pointer'>
              <img src={chatO} alt='chat1' className={`w-[23px] ${activeT === "chat1" && 'hidden'}`} />
              <img src={chatB} alt='chat1' className={`w-[23px] ${activeT === 'chat1' ? 'block' : 'hidden'}`} />
            </div>

            {/* notification */}
            <div onClick={() => { clickHandlerT('bell1') }} className='flex items-center justify-center hover:bg-[#eff2f5] bg-[#e4e6eb] rounded-full w-9 h-9 cursor-pointer'>
              <img src={notificationO} alt='notificationO' className={`w-[23px] ${activeT === "bell1" && 'hidden'}`} />
              <img src={notificationB} alt='notificationO' className={`w-[23px] ${activeT === 'bell1' ? 'block' : 'hidden'}`} />
            </div>
            {/* avatar */}
            <div onClick={() => { clickHandlerT(null) }} className='flex items-center justify-center hover:bg-[#eff2f5] bg-[#e4e6eb] rounded-full w-9 h-9 cursor-pointer'>
              {/* <img src={avatar} alt='add' className='w-[23px]' /> */}
              <AvatarSet source={user ? user.photoURL : null} />
            </div>

          </div>
      </div>
    </section>
  )
}

export default Nav