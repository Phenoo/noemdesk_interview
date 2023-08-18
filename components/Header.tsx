"use client"

import React from 'react'
import { Input } from './ui/input'
import { BiSearch } from 'react-icons/bi'
import {BsBellFill, BsFillQuestionCircleFill} from "react-icons/bs"
import { AiFillSetting } from 'react-icons/ai'
import Image from 'next/image'
import SearchComponent from './Search'


const Header = () => {
  return (
    <div className='w-full flex justify-between items-center my-8'>
      <SearchComponent />
      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
                <span className='relative'>
                    <BsBellFill /> 
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                </span>
                <span>Notifications</span>
            </div>
            <div className='flex items-center gap-2'>
                <span>
                    <AiFillSetting />
                </span>
                <span>
                Tools 
                </span>
            </div>
            
            <div className='flex items-center gap-2'>
                <span>
                    <BsFillQuestionCircleFill />
                </span>
                <span>Help</span>
            </div>
            <div>
                <Image src="/logo.PNg" alt='logo' width={100} height={100} />
            </div>
      </div>
    </div>
  )
}

export default Header
