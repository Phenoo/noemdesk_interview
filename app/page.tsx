"use client"

import DialogContainer from '@/components/Dialog';
import Body from '@/components/body'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = (car : any)=> {
      setSelectedCar(car);
      setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedCar(null);
        setModalIsOpen(false);
      };
  return (
    <div>
      <Body openModal={openModal} />
      <DialogContainer
        car={selectedCar}
        isOpen={modalIsOpen}
        onClose={closeModal}
        
   />
    </div>
  )
}

