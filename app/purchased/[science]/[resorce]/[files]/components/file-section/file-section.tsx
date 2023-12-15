"use client"

// constructor
import React from 'react'
import { usePathname } from 'next/navigation'

import { TFiles } from './file-section.type'

// icons
import { FaRegFileLines } from "react-icons/fa6";
import Link from 'next/link';

interface IFileSection {
  items: TFiles[]
  ftype: string
}


export const FileSection: React.FC<IFileSection> = ({ items, ftype }) => {

  const pathname = usePathname()

  return (
    <div>
      <div className='w-full mt-6'>
        <h1 className='text-xl uppercase'>{ftype}</h1>
      </div>
      <div className="w-full h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-6 mt-2">
        {
          items.map((item, index) => (
            <Link href={"#download-resource"} style={{ fontFamily: "cursive" }} key={index} className='resource-class bg-gray-2 dark:bg-form-strokedark items-center gap-3 shadow hover:shadow-md transition-all p-4 rounded-md'>
              <div className='flex justify-center items-center w-[50px] h-[50px] float-left mr-4 rounded-full bg-blue-500 text-graydark dark:text-white text-xl'>
                <FaRegFileLines size={22} />
              </div>
              <div className='flex-grow-[2] flex flex-col justify-center'>
                <h1 className='text-xl'>{item.name}</h1>
                <p className='text-stone-400'>{item.size}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
