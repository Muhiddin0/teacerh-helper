'use client'

import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";

// asstes
import exactScience from '@/app/assets/images/ilustrations/Professor-rafiki.svg'
import uncertainScince from '@/app/assets/images/ilustrations/ona===noaniq-fanlar.svg'
import biolog from '@/app/assets/images/ilustrations/bilolog.svg'
import scienceAll from '@/app/assets/images/ilustrations/Professor-bro.svg'

const GlobalResource = () => {

  const pathname = usePathname()

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-8">
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={'/global-resource'}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Aniq fanlar</b>
              <p className="text-center md:text-start">6 ta Resource</p>
            </div>
            <Link className="btn bg-[#407bff] text-white transition-all" href={'/global-resource'}>Fanlarni ko&#39;rish</Link>
          </div>
          <div>
            <Image height={170} src={exactScience} alt="img" />
          </div>
        </Link>
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={"scince_id"}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Noaniq fanlar</b>
              <p className="text-center md:text-start">8 ta Resource</p>
            </div>
            <Link className="btn bg-[#ffc727] text-white transition-all" href={pathname + '/global-resource/exact-science'}>Fanlarni ko&#39;rish</Link>
          </div>
          <div>
            <Image height={170} src={uncertainScince} alt="img" />
          </div>
        </Link>
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={"scince_id"}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Tabiy fanlar</b>
              <p className="text-center md:text-start">6 ta Resource</p>
            </div>
            <Link className="btn bg-[#92e3a9] text-white transition-all" href={pathname + '/global-resource/exact-science'}>Fanlarni ko&#39;rish</Link>
          </div>
          <div>
            <Image height={170} src={biolog} alt="img" />
          </div>
        </Link>
        <Link className="my-resource-card flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-3 p-5 rounded-md shadow-3 hover:shadow-6 transition bg-white dark:bg-black" href={"scince_id"}>
          <div className="flex flex-col justify-between h-full gap-2 py-3">
            <div className="flex flex-col">
              <b className="text-3xl text-center md:text-start">Barcha fanlar</b>
              <p className="text-center md:text-start">34 ta Resource</p>
            </div>
            <Link className="btn bg-[#FF725E] text-white transition-all" href={pathname + '/global-resource/exact-science'}>Fanlarni ko&#39;rish</Link>
          </div>
          <div>
            <Image height={170} src={scienceAll} alt="img" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default GlobalResource;