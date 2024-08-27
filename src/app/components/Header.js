"use client"

import React from 'react'
import CustomSearchInput from './CustomSearchInput'
import CustomAvatar from './CustomAvatar'
import Image from 'next/image'
import { Kanit } from 'next/font/google';
const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] });

const Header = () => {
  return (
    <header className="md:col-span-2 flex md:flex-row flex-col gap-4 md:gap-0 md:items-center justify-between md:h-10">
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
    <div className="flex gap-8 items-center md:justify-end">
      <span className={kanit.className}><span className='text-xl'>Good morning, Mukesh!</span></span>
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

