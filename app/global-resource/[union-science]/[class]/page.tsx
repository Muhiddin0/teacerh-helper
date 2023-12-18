'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'

// icons
import { GrView } from "react-icons/gr";

const Page = () => {


  // router
  const pathname = usePathname()

  type TBrandData = {
    class: string,
    moderators: number,
    id: number
  }
  const [brandData, setBrandData] = useState<TBrandData[]>([
    {
      class: '6',
      id: 1,
      moderators: 10
    },
    {
      class: '6',
      id: 1,
      moderators: 10
    }
  ])
  return (
    <>
      <div className="flex flex-col bg-white dark:bg-black shadow-2 rounded-md">
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
      </div>
    </>
  )
}

export default Page;