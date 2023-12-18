import Link from 'next/link'
import React from 'react'

import { TYitem } from './y-item.t'
import Image from 'next/image'

interface IYItem {
  items: TYitem[]
}

export const YItem: React.FC<IYItem> = ({ items }) => {
  return (
    <>
      <div className="w-full h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-5 mt-3">
        {
          items.map((item, index) => (
            <Link href={item.path} style={{ fontFamily: "cursive" }} key={index} className='resource-class items-center gap-3 shadow hover:shadow-md transition-all p-4 rounded-md'>
              <div className='flex justify-center items-center w-[50px] h-[50px] float-left mr-4 rounded-full bg-blue-500 text-white text-xl'>{item.icon}</div>
              <div className='flex-grow-[2] flex flex-col justify-center'>
                <h1 className='text-xl'>{item.title}</h1>
                <p className='text-stone-400'>{item.desk}-dars</p>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}