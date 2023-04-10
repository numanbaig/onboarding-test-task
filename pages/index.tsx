"use client"
import { Inter } from 'next/font/google'
import Modal from '../components/Modal'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
   setShowModal(!showModal)
  }
  return (
    <div className='flex h-screen w-screen bg-white justify-center items-center'>
      <Modal showModal={showModal} handleModal={handleModal} />
      <div className="flex justify-center items-center">
        <button className="bg-gray-300 text-black py-2 px-4 rounded" onClick={handleModal}>Show Stepper Modal</button>
      </div>
    </div>
 
  )
}
