import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { facebook, fbLogo } from '../constants';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    // states of the links in navbar
    const [activeItem, setActiveItem] = useState('Item1')

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <section className='flex items-center min-w-full h-14 xs:h-[5.5rem]  bg-white'>
            <div className='flex flex-row xs:flex-col justify-between min-w-full pl-2 pr-2 xs:pt-4'>

                {/* first block */}
                <div className='flex items-center justify-start xs:justify-between gap-2 pl-2 min-w-[7rem] xs:min-w-full'>
                    <div>
                        {/* first */}
                        <img className='w-[40px] cursor-pointer block xs:hidden' src={fbLogo} alt='fbLogo' />
                        <img className='w-[100px] cursor-pointer block ss:hidden' src={facebook} alt='facebook' />
                    </div>
                    <div className='flex  gap-2'>
                        <div className='h-10 w-10 bg-[#eff2f5] justify-center items-center rounded-full'>
                            <IconButton>
                                <SearchIcon sx={{ fontSize: 21.5 }} className='xs:text-black'/>
                            </IconButton>
                        </div>
                        {/* <div className='h-10rem w-[10rem] rounded-[100%] bg-[#eff2f5]'>
                    <input className='bg-transparent'></input>
                    </div> */}
                        <div className='h-10 w-10 bg-[#eff2f5] justify-center items-center rounded-full'>
                            <IconButton>
                                <MenuIcon sx={{ fontSize: 21.5 }} className='xs:text-black'/>
                            </IconButton>
                        </div>
                    </div>
                </div>

                {/* on large devices */}

                {/* <li onClick={() => handleItemClick('Item 1')} className={activeItem === 'Item 1' ? 'active' : ''}>
                    Item 1
                </li> */}

                <div className={`flex justify-center items-center w-[20rem] xs:min-w-full`}>
                    <div className={activeItem === 'Item1' && 'border-b-[#2e81f4] border-b-[3px]'}>
                        <div
                            onClick={() => handleItemClick('Item1')}
                            className={` ${activeItem === 'Item1' && 'hover:bg-[#eff2f5]'}  flex justify-center items-center w-16 h-11 rounded-lg m-1 cursor-pointer`}>
                            <HomeRoundedIcon style={{ fontSize: 33 }} className={` ${activeItem === 'Item1' ? 'text-[#2e81f4]' : "text-[#787a7e]"} h-3`} />
                            <HomeRoundedIcon style={{ fontSize: 33 }} className={activeItem === 'Item1' ? 'text-[#2e81f4]' : "text-[#787a7e]"} />
                        </div>
                    </div>

                    <div className={activeItem === 'Item2' && 'border-b-[#2e81f4] border-b-[3px]'}>
                        <div
                            onClick={() => handleItemClick('Item2')}
                            className={` ${activeItem === 'Item2' && 'hover:bg-[#eff2f5]'}  flex justify-center items-center w-16 h-11 rounded-lg m-1 cursor-pointer`}>
                            <PeopleOutlineIcon style={{ fontSize: 33 }} className={activeItem === 'Item2' ? 'text-[#2e81f4]' : 'text-[#787a7e]'} />
                        </div>
                    </div>

                    <div className={activeItem === 'Item3' && 'border-b-[#2e81f4] border-b-[3px]'}>
                        <div
                            onClick={() => handleItemClick('Item3')}
                            className={` ${activeItem === 'Item3' && 'hover:bg-[#eff2f5]'}  flex justify-center items-center w-16 h-11 rounded-lg m-1 cursor-pointer`}>
                            <StorefrontOutlinedIcon style={{ fontSize: 33 }} className={activeItem === 'Item3' ? 'text-[#2e81f4]' : 'text-[#787a7e]'} />
                        </div>
                    </div>

                    <div className={activeItem === 'Item4' && 'border-b-[#2e81f4] border-b-[3px]'}>
                        <div
                            onClick={() => handleItemClick('Item4')}
                            className={` ${activeItem === 'Item4' && 'hover:bg-[#eff2f5]'}  flex justify-center items-center w-16 h-11 rounded-lg m-1 cursor-pointer`}>
                            <SportsEsportsOutlinedIcon style={{ fontSize: 33 }} className={activeItem === 'Item4' ? 'text-[#2e81f4]' : 'text-[#787a7e]'} />
                        </div>
                    </div>

                </div>


                {/* second block */}

                <div className='flex xs:hidden justify-center items-center gap-2 min-w-[12rem] mr-1'>
                    <div className='md:block hidden h-10 w-10 bg-[#e4e6eb] rounded-full'>
                        <IconButton aria-label="delete">
                            <AppsRoundedIcon className='text-black' />
                        </IconButton>
                    </div>
                    <div className='h-10 w-10 bg-[#e4e6eb] rounded-full block md:hidden'>
                        <IconButton aria-label="delete">
                            <AddIcon className='text-black' />
                        </IconButton>
                    </div>
                    <div className='h-10 w-10 bg-[#e4e6eb] rounded-full'>
                        <IconButton aria-label="delete">
                            <ForumIcon className='text-black' />
                        </IconButton>
                    </div>
                    <div className='h-10 w-10 bg-[#e4e6eb] rounded-full'>
                        <IconButton aria-label="delete">
                            <NotificationsActiveIcon className='text-black' />
                        </IconButton>
                    </div>
                    <div className='h-10 w-10 bg-[#e4e6eb] rounded-full'>
                        <IconButton aria-label="delete">
                            <AccountCircleIcon className='text-black' />
                        </IconButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar