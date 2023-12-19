import React from 'react'
import { Tthemeitems } from './theme-list.t'

import { CiSearch } from "react-icons/ci";

export const ThemeList = () => {
  return (
    <>
      {/* This is an example component */}
      <div className="relative overflow-x-auto sm:rounded-lg my-4">
        <div className="">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative flex gap-2 px-2 py-1 rounded-lg border-[2px] border-graydark">
            <input placeholder="Mavzu nomi bo'yicha qidirish" className='flex-grow-[2] border-none outline-none' type="text" />
            <button className='w-[30px] h-[30px]'>
              <CiSearch size={22} />
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                infra tuzilmalar
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
