
import files from '@/app/assets/images/ilustrations/files.svg'
import resource from '@/app/assets/images/ilustrations/Bookshop-rafiki.svg'
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-12">
        <Link href={"/my-resource"} className="resource-departments flex justify-center items-center flex-col gap-3 shadow-3 bg-white dark:bg-black hover:shadow-6 transition-all p-4 rounded-md">
          <Image width={300} src={files} alt='image' />
          <button className='btn bg-primary text-white'>Mening Resurslarim</button>
        </Link>
        <Link href={"/global-resource"} className="resource-departments flex justify-center items-center flex-col gap-3 shadow-3 bg-white dark:bg-black hover:shadow-6 transition-all p-4 rounded-md">
          <Image width={300} src={resource} alt='image' />
          <button className='btn bg-primary text-white'>Yange Resurslar</button>
        </Link>
      </div>
    </>
  );
}

export default Page;