'use client'

import resourcePreview from '@/app/assets/images/resource-preview.svg'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import { FaUserGraduate } from "react-icons/fa";

const Page = () => {

  const pathname = usePathname()

  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-8 mt-10">
        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>

        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>

        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>

        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>

        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>

        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>

        <Link href={pathname + '/1'} className="bg-white rounded-md shadow-3 hover:shadow-6 transition-all dark:bg-black">
          <Image className='w-full rounded-md' src={resourcePreview} alt='img' />
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-bold'>Алгебра и начало математического анализа. 10-11 класс</h1>
            <p className='flex items-center gap-2 text-body'><FaUserGraduate /> Samandar Azamob</p>
            <div className='flex items-center mt-3 p-2 gap-2 hover:opacity-80 transition-all rounded-md bg-primary self-start text-white'>
              <b className='text-sm'>100,000</b>
              <span className='text-xs'>sum/mec</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Page;