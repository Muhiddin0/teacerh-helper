'use client'

import { ResourceItems } from "./resource-items/resource-items";
import { moderatorResourceMedias } from './resource-items/resource-items.items'

// icons
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DeletResource, showResource } from "@/services/moderator";
import { DeleteResource } from "@/services/admin";

const Show = (props) => {

  const pathanme = usePathname()
  const route = useRouter()

  type Tresourceitem = {
    id: number,
    resource_name: string,
    topic: {
      id: number,
      topic_name: string,
      add: {
        class: string,
        quarter: string,
        science: string
      }
    },
    media: {
      url: string,
      mime: string,
      size: number
    }[]
  }

  const router = useRouter();
  const [resourceitem, setResourceItem] = useState<Tresourceitem>()

  useEffect(() => {

    let user = String(window.localStorage.getItem('user'))
    let { id } = props.params

    console.log(user, id);

    showResource(id, user)
      .then((response) => {
        let { data } = response.data
        setResourceItem(data)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])


  function DeleteFormToggler() {
    let delteForm = document.querySelector('.delete-modal')
    delteForm?.classList.toggle('active')
  }

  function HandleDelete() {
    let userToken = String(window.localStorage.getItem('user'))
    let { id } = props.params

    DeleteResource(id, userToken)
      .then((response) => {
        console.log(response);
        route.push('/moderator/my-resource')
      })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <>
      <div className="">
        <h1 className="text-3xl">Test Resource</h1>

        <div className="flex items-end gap-1 mt-4">
          <h1 className="text-xl font-bold">Mavzu: </h1>
          <p>O‘zgaruvchi miqdorlar orttirmalarining nisbati va uning ma’nosi. Urinma ta’rifi. Funksiya orttirmasi</p>
        </div>

        <ul className="mt-2">
          <li>
            <b>Sinifi: </b>
            <span>{resourceitem?.topic.add.class}</span>
          </li>
          <li>
            <b>Chorak: </b>
            <span>{resourceitem?.topic.add.quarter}</span>
          </li>
          <li>
            <b>Fani: </b>
            <span>{resourceitem?.topic.add.science}</span>
          </li>
        </ul>


        <h1 className="mt-8">Sizning hujjatlaringiz</h1>
        <ResourceItems items={resourceitem?.media} />

        <div className="w-full flex justify-end gap-3 mt-6">
          <Link
            href={pathanme + "/edit"}
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <MdOutlineModeEdit />
            Taxrirlash
          </Link>
          <button
            onClick={DeleteFormToggler}
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <RiDeleteBin6Line />
            O'chirish
          </button>
        </div>
      </div>

      <div className="delete-modal fixed z-[10000000] top-0 left-0 w-full h-full flex justify-center items-center bg-[var(--transparent)] p-5">
        <div className="p-4 rounded-md bg-white">
          <ul className="mt-2">
            <li>
              <b>Sinifi: </b>
              <span>{resourceitem?.topic.add.class}</span>
            </li>
            <li>
              <b>Chorak: </b>
              <span>{resourceitem?.topic.add.quarter}</span>
            </li>
            <li>
              <b>Fani: </b>
              <span>{resourceitem?.topic.add.science}</span>
            </li>
          </ul>

          <div className="flex justify-end items-center gap-2 w-[600px]">
            <button onClick={HandleDelete} className="flex gap-2 py-2 px-4 rounded-md bg-danger text-white">
              Ha
            </button>
            <button onClick={DeleteFormToggler} className="flex gap-2 py-2 px-4 rounded-md bg-primary text-white">
              Yo'q
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Show;