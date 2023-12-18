"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { GetResource } from "@/services/admin";
import { useEffect, useState } from "react";
import { TResource } from "./resource-items.type";


const Resource = () => {

  const pathname = usePathname()

  const [resourceItems, SetResourceItems] = useState<TResource[]>([])

  useEffect(() => {
    let userToken: string = String(window.localStorage.getItem('user'))
    GetResource(userToken)
      .then((response) => {
        let data = response.data.data
        console.log(data);

        SetResourceItems(data)
      })
      .then((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 grid-rows-1 gap-8">

          {
            resourceItems.map((item, index) => (
              <>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th>Resource nomi</th>
                      <th>Mavzu nomi</th>
                      <th>O'rni</th>
                      <th>yaratuvchisi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      resourceItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.resource_name}</td>
                          <td className="w-[400px]">{item.topic.topic_name}</td>
                          <td>
                            <span className="block">
                              {item.topic.add.class}
                            </span>
                            <span className="block">
                              {item.topic.add.quarter}
                            </span>
                            <span className="block">
                              {item.topic.add.science}
                            </span>
                          </td>
                          <td className="">
                            <span className="block">
                              {item.moderator.user.first_name}
                              {" "}
                              {item.moderator.user.last_name}
                            </span>
                            <span className="block">
                              {item.moderator.user?.email}
                              {item.moderator.user?.phone}
                            </span>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </>
            ))
          }


          {/* {
            resourceItems.map((item, index) => (
              <>

                <div className="">
                  <h1 className="text-3xl">Test Resource</h1>

                  <div className="gap-1 mt-4">
                    <h1 className="inline text-xl font-bold">Mavzu: </h1>
                    <p className='inline'>{item?.topic.topic_name}</p>
                  </div>

                  <div className="mt-4">
                    <b className="text-xl">Resource</b>
                    <ul className="pl-4">
                      <li className="flex gap-1">
                        <b>Sinf:</b>
                        <p>{item.topic.add.class}</p>
                      </li>
                      <li className="flex gap-1">
                        <b>Chorak:</b>
                        <p>{item.topic.add.quarter}</p>
                      </li>
                      <li className="flex gap-1">
                        <b>Fan:</b>
                        <p>{item.topic.add.science}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <b className="text-xl">User</b>
                    <ul className="pl-4">
                      <li className="flex gap-1">
                        <b>Ismi:</b>
                        <p>{item.moderator.user.first_name}</p>
                      </li>
                      <li className="flex gap-1">
                        <b>Familyasi:</b>
                        <p>{item.moderator.user.last_name}</p>
                      </li>
                      <li className="flex gap-1">
                        <b>Email:</b>
                        <p>{item.moderator.user.email}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ))
          } */}
        </div>
      </div>
    </div>
  );
}

export default Resource;

{/* <div className="flex justify-end gap-3">
  <Link
    href={pathname + "/1"}
    className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
  >
    <span className="mr-2">
      <HiOutlineEye />
    </span>
    Ko'rish
  </Link>
  <button
    className="inline-flex items-center justify-center rounded-md bg-danger py-2 px-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
  >
    <span className="mr-2">
      <RiDeleteBin6Line />
    </span>
    O'chirish
  </button>
</div> */}

