"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

import { TModeratorResorceitem } from './resource-items.type'
import Link from 'next/link'

// icons
import { MdDeleteOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdMore } from "react-icons/io";


interface IResourceItems {
  items: TModeratorResorceitem[]
}

export const ResourceItems: React.FC<IResourceItems> = ({ items }) => {

  const pathname = usePathname()

  return (
    <>
      {
        <div className="w-full h-full grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-1 gap-6 mt-2">
          {
            items.map((item, index) => (
              <Link href={pathname + "/" + item.id} style={{ fontFamily: "cursive" }} key={index} className='resource-class moderator flex relative bg-gray-2 dark:bg-form-strokedark items-center gap-3 shadow hover:shadow-md transition-all p-4 rounded-md'>
                <div className='flex justify-center items-center w-[50px] h-[50px] float-left mr-4 rounded-full bg-blue-500 text-graydark dark:text-white text-xl'>
                  <FaRegFileAlt size={22} />
                </div>
                <div className='flex-grow-[2] flex flex-col justify-center'>
                  <h1 className='text-xl'>{item.resource_name}</h1>
                  <p className='text-stone-400'>{item.created_at}</p>
                </div>
                <div className='action-box flex flex-col justify-end gap-4'>
                  <button className='p-2 rounded-md bg-danger text-white cursor-pointer'>
                    <MdDeleteOutline />
                  </button>
                  <Link href={pathname + "/edit/" + item.id} className='p-2 rounded-md bg-meta-9 text-bodydark2 cursor-pointer'>
                    <MdOutlineEdit />
                  </Link>
                </div>
              </Link>
            ))
          }
        </div>
      }
    </>
  )
}
