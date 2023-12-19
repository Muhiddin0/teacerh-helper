
'use client'

import files from '@/app/assets/images/ilustrations/files.svg'
import resource from '@/app/assets/images/ilustrations/Bookshop-rafiki.svg'
import Image from 'next/image';
import Link from 'next/link';
import MyResource from '../my-resource/page';
import GlobalResource from '../global-resource/page';
import { useState } from 'react';

const Page = () => {

  // states
  const [selectTab, useSelectTab] = useState<string>("my")

  function HandleTabToggler(value: string) {
    useSelectTab(value)
  }

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li onClick={() => HandleTabToggler('my')} className={`cursor-pointer me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 tab-item ${selectTab == "my" ? "active" : ""}`}>
            Mening resurslarim
          </li>
          <li onClick={() => HandleTabToggler('global')} className={`cursor-pointer me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 tab-item ${selectTab == "global" ? "active" : ""}`}>
            Barcha resurlslar
          </li>
        </ul >
      </div >

      <div className='mt-8'>
        {
          selectTab == "my" ? (
            <div>
              <h1 className='text-2xl mb-2'>Sizning resurlaringiz</h1>
              <MyResource />
            </div>
          ) : (
            <div>
              <h1 className='text-2xl mb-2'>Sotib olinmagan resurlar</h1>
              <GlobalResource />
            </div>
          )
        }
      </div>


      {/* <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-12">
        <Link href={"/my-resource"} className="resource-departments flex justify-center items-center flex-col gap-3 shadow-3 bg-white dark:bg-black hover:shadow-6 transition-all p-4 rounded-md">
          <Image width={300} src={files} alt='image' />
          <button className='btn bg-primary text-white'>Mening Resurslarim</button>
        </Link>
        <Link href={"/global-resource"} className="resource-departments flex justify-center items-center flex-col gap-3 shadow-3 bg-white dark:bg-black hover:shadow-6 transition-all p-4 rounded-md">
          <Image width={300} src={resource} alt='image' />
          <button className='btn bg-primary text-white'>Yange Resurslar</button>
        </Link>
      </div> */}
    </>
  );
}

export default Page;