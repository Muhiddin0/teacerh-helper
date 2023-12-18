'use client'

import React, { createRef, useEffect, useState } from 'react'

// icons
import { IoCheckmark } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


import { bekomeUser } from './bekome-users'
import { BecomeModeratorList, ConfirModerator } from '@/services/admin';
import { TBekomeUser } from './bekome-users.type';
import { ButtonLoader } from '@/components/button-loader';

const BecomeModerator = () => {

  const [becomeUserList, setBecomeUserList] = useState<TBekomeUser[]>([])

  const refsArray = becomeUserList.map(() => createRef<HTMLButtonElement>());
  const tableItemArrayRefs = becomeUserList.map(() => createRef());

  useEffect(() => {
    let authToken = String(window.localStorage.getItem('user'))

    BecomeModeratorList(authToken)
      .then((response) => {
        let { data } = response.data
        console.log(data);

        let bekomeUsers: TBekomeUser[] = []

        data.map((item: TBekomeUser) => {
          item.status == "pending" ?
            bekomeUsers = [...bekomeUsers, item] : null
        })

        setBecomeUserList(bekomeUsers)

      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function checkModerator(id: number, refIndex: number) {

    let loaderButtonRef: React.RefObject<HTMLButtonElement> = refsArray[refIndex]
    let tableitemRef = tableItemArrayRefs[refIndex]

    loaderButtonRef.current?.disabled
    loaderButtonRef.current?.setAttribute('set-load', 'true')

    let authToken = String(window.localStorage.getItem('user'))

    console.log(id);
    console.log(authToken);

    ConfirModerator(id, authToken)
      .then((response) => {
        console.log(response);
        loaderButtonRef.current?.removeAttribute('set-load')
        loaderButtonRef.current?.removeAttribute('disabled')
        console.log(tableitemRef);

        tableitemRef.current?.remove()
      })
      .catch((error) => {
        console.log(error);
        loaderButtonRef.current?.removeAttribute('set-load')
        loaderButtonRef.current?.removeAttribute('disabled')
        console.log(tableitemRef);

        tableitemRef.current?.remove()
      })
  }

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
                    becomeUserList.map((item, index) =>
                      <React.Fragment key={index}>
                        <tr ref={tableItemArrayRefs[index]} className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4">{item.user.first_name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.user.last_name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.user.phone}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.science.science_name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.science.science_group}</td>
                          <td className="flex gap-2 whitespace-nowrap px-6 py-4">
                            <button ref={refsArray[index]} onClick={() => checkModerator(item.id, index)} className='check-moderator-btn flex justify-center items-center w-[30px] h-[30px] rounded-full hover:text-primary transition-all'>
                              <span className='button-loader'>
                                <ButtonLoader />
                              </span>
                              <span className='button-chech'>
                                <IoCheckmark size={23} />
                              </span>
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