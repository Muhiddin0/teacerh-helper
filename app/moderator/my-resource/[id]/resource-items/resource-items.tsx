"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

import { TResorceShowMedia } from './resource-items.type'
import Link from 'next/link'

// icons
import { MdDeleteOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { MdOutlineCloudDownload } from "react-icons/md";
import { ReourceMedieType } from '@/app/admin/resource/[id]/page.type'


interface IResourceItems {
  items: ReourceMedieType[] | undefined
}

export const ResourceItems: React.FC<IResourceItems> = ({ items }) => {

  const pathname = usePathname()

  return (
    <>
      {
        <div className="w-full h-full grid 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-6 mt-2">
          {
            items?.map((item, index) => (
              <Link
                href={item.url} style={{ fontFamily: "cursive" }} key={index}
                className='resource-class moderator flex justify-start relative bg-gray-2 dark:bg-form-strokedark items-center gap-1 shadow hover:shadow-md transition-all p-3 rounded-md'>
                <div className='flex justify-center items-center w-[50px] h-[50px] float-left rounded-full bg-blue-500 text-graydark dark:text-white text-xl'>
                  <FaRegFileAlt size={28} />
                </div>
                <div className='flex-grow-[2] flex items-center gap-2'>
                  <MdOutlineCloudDownload />
                  {item.size}
                </div>
              </Link>
            ))
          }
        </div>
      }
    </>
  )
}
