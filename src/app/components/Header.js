"use client"

import React from 'react'
import CustomSearchInput from './CustomSearchInput'
import CustomAvatar from './CustomAvatar'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="col-span-2 flex items-center justify-between h-10">
    <div className="flex items-center justify-start gap-8">
      <Image
        className="inline-block"
        src="/seido.webp"
        width={60}
        height={15}
        alt="logo image"
      />
      <div>
        <CustomSearchInput />
      </div>
    </div>
    <div className="flex gap-8 items-center justify-end">
      <span className="text-[20px]">Good morning, Mukesh!</span>
      <CustomAvatar
        src="/user-img.webp"
        alt="User Avatar"
        fallback="TC"
      />
    </div>
  </header>
  )
}

export default Header

