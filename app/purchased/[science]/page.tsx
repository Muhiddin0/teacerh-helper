'use client'

import Link from "next/link";
import { ResourceItems, resoucreItem } from "../components/";
import { resourceClassItems } from "./resource-class.itmes";

import { usePathname } from 'next/navigation'


const Science = () => {

  const pathname = usePathname()

  return (
    <div className='transition-all'>
      <div className="w-full h-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-6 mt-6">
        {
          resourceClassItems.map((item, index) => (
            <Link href={pathname + "/" + item.class} style={{ fontFamily: "cursive" }} key={index} className='resource-class bg-gray-2 dark:bg-form-strokedark items-center gap-3 shadow hover:shadow-md transition-all p-4 rounded-md'>
              <div className='flex justify-center items-center w-[50px] h-[50px] float-left mr-4 rounded-full bg-blue-500 bg-meta-4 text-white text-xl'>{item.class}</div>
              <div className='flex-grow-[2] flex flex-col justify-center'>
                <h1 className='text-xl'>{item.class}-Sinif resurslari</h1>
                <p className='text-stone-400'>{item.themeID}-dars</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Science;