"use client"

import React from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";


import { CollapsibleDemo } from './collapse'
import { Button } from './ui/button';
import { HomeIcon, LogOut } from 'lucide-react';
import { Separator } from './ui/separator';

const Sidebarmenu = () => {
    const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='flex flex-col items-start gap-3 w-full'>
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full text-white space-y-2"
    >
        <CollapsibleTrigger asChild>
            <div className='flex items-center gap-2 justify-center px-4 cursor-pointer'>
            <HomeIcon /> Home
            </div>
        </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 px-4">
        <div className="px-4 py-2 flex gap-2 items-center text-sm hinge cursor-pointer">
         Profile
        </div>
        <div className="px-4 py-2 flex gap-2 items-center text-sm cursor-pointer">
            <LogOut /> Log out
        </div>
      </CollapsibleContent>
    </Collapsible>
    <Separator />

      <CollapsibleDemo />
    </div>
  )
}

export default Sidebarmenu
