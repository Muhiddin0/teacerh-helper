"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LiaSaveSolid } from "react-icons/lia";


const Edit = () => {

  const pathname = usePathname()

  return (
    <div className="">
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        {/* header */}
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            <b>Samandar</b>ni O'zgartirish
          </h3>
        </div>

        {/* form */}
        <div className="flex flex-col gap-5.5 p-6.5">

          {/* first name */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Ismi
            </label>
            <input
              type="text"
              value={"Samandar"}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          {/* last name */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Familyasi
            </label>
            <input
              type="text"
              value={"Azamov"}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <input className="p-2 outline-none border-none bg-bodydark1 dark:bg-body rounded-md" type="date" />

          <div className='flex justify-around items-center gap-6'>
            <select id="small" className="block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Sinfni tanlang</option>
              <option value="US">1-sinf</option>
              <option value="US">2-sinf</option>
              <option value="US">3-sinf</option>
              <option value="US">4-sinf</option>
              <option value="US">5-sinf</option>
              <option value="US">6-sinf</option>
              <option value="US">7-sinf</option>
              <option value="US">8-sinf</option>
              <option value="US">8-sinf</option>
              <option value="US">10-sinf</option>
              <option value="US">11-sinf</option>
            </select>
            <select id="small" className="block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Fanni nalang</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
            </select>
          </div>

          <div className="flex jus gap-3">
            <Link
              href={pathname + "#save"}
              className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span className="mr-2">
                <LiaSaveSolid />
              </span>
              Save
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Edit;