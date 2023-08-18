"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pen, Trash } from "lucide-react"
import React, { useState } from 'react'

const DialogContainer = ({car, isOpen, onClose}: {car: any, isOpen: any, onClose: any}) => {
    if(!car){
        return null
    }

  return (
    <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
            <div className="font-bold absolute top-3">Schedule Overview</div>
            <div className="flex gap-3 items-center absolute top-3 right-10">
                <div>
                    <Pen  size={14}/>
                </div>
                <div><Trash size={14} /> </div>
            </div>
        </DialogHeader>
        <hr />
        <div className="flex items-center gap-4 py-4">
           <div>
            <img src={car.image} alt={car.name} className="w-30 object-contain h-24  mr-2 block" />
           </div>
           <div>
                <div className="font-bold"> {car.name}</div>
                <div className="text-sm"> {car.name}</div>
                {
                    car.condition && (
                        <div className="text-sm text-green-500"> {car.condition}</div>
                    )
                }
           </div>
        </div>

        <div className='flex gap-4'>
            <div className="font-bold w-32 text-sm  capitalize">driver</div>
            <div className='text-sm'>{car.name}</div>
        </div>
        <div className='flex gap-4'>
            <div className="font-bold w-32 text-sm  capitalize">customer</div>
            <div className='text-sm'>Adekule</div>
        </div>
        <div className='flex gap-4'>
            <div className="font-bold w-32 capitalize text-sm ">service</div>
            <div className="text-sm">Full Time Rental</div>
        </div>
        <div className='flex gap-4'>
            <div className="font-bold w-32  text-sm capitalize">start date</div>
            <div>16-03-2022</div>
        </div>

        <div className='flex gap-4'>
            <div className="font-bold w-32 text-sm  capitalize">end date</div>
            <div className='text-sm'>!9-09-2022</div>
        </div>
        <div className='flex gap-4'>
            <div className="font-bold w-32 text-sm  capitalize">Pickup location</div>
            <div className='text-sm'>Zuma Close, Osborn Phase, Ikoyi</div>
        </div>
        <div className='flex gap-4'>
            <div className="font-bold w-32  text-sm capitalize">Drop off location</div>
            <div className='text-sm'>Same as Drop-off location</div>
        </div>
        <div>
            <textarea name=""  id="" placeholder="Note" className="w-full h-14 rounded-md p-2"></textarea>
        </div>
        <DialogFooter>
          <hr />
        <div className="flex justify-between w-full">
            <div className="text-xs">
            Created by Adekunle 
          </div>
          <div className="text-xs">
            Edited by &nbsp;
          </div>
        </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default DialogContainer

