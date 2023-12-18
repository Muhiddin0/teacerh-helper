'use client'

import Image from "next/image";
import Link from "next/link";

// assets
import algebra from '@/app/assets/images/ilustrations/algebra.svg'
import { usePathname } from "next/navigation";

const Page = () => {

  const pathname = usePathname()

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-8">
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={pathname + '/5'}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Algebra</b>
              <p className="text-center md:text-start">6 ta Moderator</p>
            </div>
            <Link className="btn bg-[#407bff] text-white transition-all" href={pathname + '/5'}>Siniflarni ko'rish</Link>
          </div>
          <div>
            <Image height={170} src={algebra} alt="img" />
          </div>
        </Link>
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={pathname + '/5'}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Geometriya</b>
              <p className="text-center md:text-start">5 ta Moderator</p>
            </div>
            <Link className="btn bg-[#407bff] text-white transition-all" href={pathname + '/5'}>Siniflarni ko'rish</Link>
          </div>
          <div>
            <Image height={170} src={algebra} alt="img" />
          </div>
        </Link>
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={pathname + '/5'}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Fizika</b>
              <p className="text-center md:text-start">8 ta Moderator</p>
            </div>
            <Link className="btn bg-[#407bff] text-white transition-all" href={pathname + '/5'}>Siniflarni ko'rish</Link>
          </div>
          <div>
            <Image height={170} src={algebra} alt="img" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Page;