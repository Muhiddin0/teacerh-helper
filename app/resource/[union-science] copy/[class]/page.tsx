'use client'

import { YItem } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'

// items 
import { themeItems } from './y-item.data'

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

      <h1 className='text-3xl mt-10'>Sentabr</h1>
      <div className="w-full h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-5 mt-2">
        {
          themeItems.map((item, index) => (
            <Link href={pathname + item.path} style={{ fontFamily: "cursive" }} key={index} className='resource-class items-center gap-3 shadow hover:shadow-md transition-all p-4 rounded-md'>
              <div className='flex justify-center items-center w-[50px] h-[50px] float-left mr-4 rounded-full bg-blue-500 text-white bg-primary text-xl'>{<item.icon />}</div>
              <div className='flex-grow-[2] flex flex-col justify-center'>
                <h1 className='text-2xl'>{item.title}</h1>
                <p className='text-stone-400 text-sm text-body font-extralight'>{item.desk}</p>
              </div>
            </Link>
          ))
        }
      </div>

      {/* <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sinifi
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Moderatorlar soni
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              actions
            </h5>
          </div>
        </div>
        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.class}-Sinif
              </p>
            </div>
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.moderators} ta moderator
              </p>
            </div>
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <Link href={pathname + '/resource'} className="btn !flex items-center gap-2 bg-primary text-white dark:text-white sm:block">
                <GrView />
                <span>
                  Ko'rish
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </>
  )
}

export default Page;