"use client"
import React, { useState } from 'react'
import Popup from '@/components/popup'

const page = () => {
    const [isOpen , setIsOpen] = useState(false)
    const popUpOpen = () => {
        setIsOpen(!isOpen) 
    }
  return (
    <>
    <center>
      <button type="button" onClick={popUpOpen} className="flex w-50 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Click Here To Register</button>
    </center>
    {
        <Popup isOpen={isOpen} closePopup={popUpOpen}/> 
    }

</>
  )
}

export default page
