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
        SetResourceItems(data)
      })
      .then((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 grid-rows-1 gap-8">
          {
            resourceItems.map((item, index) => (
              <>
                <div
                  className="flex bg-stroke dark:bg-graydark flex-col gap-1 p-4 rounded-md shadow-3">
                  <h1 className="text-2xl" style={{ fontFamily: "cursive" }}>Test resource</h1>
                  <div>
                    <b className="text-md">Teacher: </b>
                    <span>{item.moderator.user.first_name}</span>
                  </div>
                  <div className="">
                    <b>Mavzu: </b>
                    <Link className="hover:text-primary transition-all underline" href={pathname + "/" + item.id}>{item.topic.topic_name}</Link>
                  </div>
                </div>
              </>
            ))
          }
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

