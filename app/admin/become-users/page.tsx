import React from 'react'

// icons
import { IoCheckmark } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


import { bekomeUser } from './bekome-users'

const BecomeModerator = () => {
  return (
    <div>
      {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Ismi
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Familyasi
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Telefon
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Fani nomi
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Fani turi
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bekomeUser.map((item, index) =>
                      <React.Fragment key={index}>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4">{item.user.first_name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.user.last_name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.user.phone}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.science.science_name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.science.science_group}</td>
                          <td className="flex gap-2 whitespace-nowrap px-6 py-4">
                            <button className='flex justify-center items-center w-[30px] h-[30px] rounded-full hover:text-primary transition-all'>
                              <IoCheckmark size={23} />
                            </button>
                            <button className='flex justify-center items-center w-[30px] h-[30px] rounded-full hover:text-danger transition-all'>
                              <IoMdClose size={23} />
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeModerator;