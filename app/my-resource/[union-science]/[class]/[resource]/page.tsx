'use client'

import { YItem } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'

// items 
import { resourceFileItems } from './resource-files'

// icons
import { IoCloudDownloadOutline } from "react-icons/io5";

const Page = () => {

  // router
  const pathname = usePathname()

  return (
    <>
      <div className='mt-6'>
        <div className='flex gap-3'>
          <Link className='quarter' href={'#un-link'}>
            1-chorak
          </Link>
          <Link className='quarter active' href={'#un-link'}>
            2-chorak
          </Link>
          <Link className='quarter' href={'#un-link'}>
            3-chorak
          </Link>
          <Link className='quarter' href={'#un-link'}>
            4-chorak
          </Link>
        </div>
      </div>

      <h1 className='text-3xl mt-10'>PDF</h1>
      <div className="w-full h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-5 mt-2">
        {
          resourceFileItems.map((item, index) => (
            <Link href={'download'} style={{ fontFamily: "cursive" }} key={index} className='resource-class items-center gap-3 shadow hover:shadow-md transition-all p-4 rounded-md'>
              <div className='flex justify-center items-center w-[50px] h-[50px] float-left mr-4 rounded-full bg-blue-500 text-white bg-primary text-xl'>{<item.icon />}</div>
              <div className='flex-grow-[2] flex flex-col justify-center'>
                <h1 className='text-xl'>{item.title}</h1>
                <p className='text-stone-400 text-sm text-body font-extralight'>{item.desk}</p>
              </div>
            </Link>
          ))
        }
      </div>

    </>
  )
}

export default Page;