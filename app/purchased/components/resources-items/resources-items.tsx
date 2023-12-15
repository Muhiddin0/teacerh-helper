'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { TResource } from './resouce-item.types'
import Image from 'next/image'
import Link from 'next/link'

interface IResourceItems {
  items: TResource[]
}

export const ResourceItems: React.FC<IResourceItems> = ({ items }) => {

  const pathname = usePathname()

  return (
    <div className="w-full h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-5 mt-3">
      {
        items.map((item, index) => (
          <Link href={pathname + "/" + item.science} className='resouce-card flex flex-wrap p-3 bg-gray-2 dark:bg-form-strokedark rounded-md shadow-sm hover:shadow-md transition-all' key={index}>
            <div className='w-[50%]'>
              <b className='text-xl capitalize font-semibold text-blue-500'>{item.science}</b>
              <p className='text-stone-500'>{item.quarter}</p>
            </div>
            <div className='flex justify-end items-end w-[50%] '>
              <Image className='w-[100px]' src={item.icon} alt="" />
            </div>
          </Link>
        ))
      }
    </div>
  )
}
// export default ResourceItems;
