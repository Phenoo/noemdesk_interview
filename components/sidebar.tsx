"use client"

import React, { useMemo } from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Sidebarmenu from './sidebarmenu';
import { Separator } from './ui/separator';
import Header from './Header';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar:React.FC<SidebarProps> = ({children}) => {
  return (
    <div className='h-full flex'>
        <div 
        className="
          flex 
          flex-col 
          items-center
          gap-y-2 
          bg-blue-400
          h-screen 
          w-[170px] 
          py-8
        "
      >
        <div className='mb-6'>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='font-bold text-white text-center mt-2'>Kemi Tunde</div>
            <p className='text-sm opacity-70 text-white text-center'>Admin</p>
        </div>
        <Sidebarmenu />
      </div>
      <main className="h-screen flex-1 overflow-y-auto py-4 bg-gray-200 px-8">
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Sidebar