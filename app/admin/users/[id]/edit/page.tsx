"use client"

import { getUserList } from "@/services/admin";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createRef, useEffect, useState } from "react";

import { LiaSaveSolid } from "react-icons/lia";
import { users } from "../../types";
import { Science } from "@/services/bekome-moderator";


const Edit = (props) => {

  // route hooks
  const pathname = usePathname()

  // State hooks
  const [user, setUser] = useState<users>()
  const [science, setScience] = useState<TScince[]>([])

  // refs
  const selectRef = createRef<HTMLSelectElement>(0)

  type TScince = {
    "id": number,
    "science_name": string,
    "science_group": string
  }

  // set Class
  useEffect(() => {
    Science()
      .then((response) => {
        let data = response.data.data
        setScience(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {

    let authToken = String(window.localStorage.getItem('user'))

    let { id } = props.params

    getUserList(id, authToken)
      .then((response) => {
        let { data } = response.data
        setUser(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function formSubmit() {

  }

  const errorRemover = (e) => {
    e.target.style = ""
  }

  return (
    <div className="">
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        {/* header */}
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            <b>{user?.first_name}</b>ni O'zgartirish
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
              value={user?.first_name}
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
              value={user?.last_name}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <input className="p-2 outline-none border-none bg-bodydark1 dark:bg-body rounded-md" type="date" />

          <div className='flex justify-around items-center gap-6'>
            <select onChange={e => errorRemover(e)} ref={selectRef} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Fani tanlang</option>
              {
                science.map((item, index) => (
                  <option key={index} value={item.id}>{item.science_name}</option>
                ))
              }
            </select>
          </div>

          <div className="flex jus gap-3">
            <button
              onClick={formSubmit}
              className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span className="mr-2">
                <LiaSaveSolid />
              </span>
              Save
            </button>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Edit;