"use client"

import { getUserList } from "@/services/admin";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// icons
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// types
import { users } from '../types'

const User = (props) => {

  const pathname = usePathname()

  const [user, setUser] = useState<users>()

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

  return (
    <div>

      <h1 className="text-3xl">{user?.first_name}</h1>

      <ul className="mt-4">
        <li className="flex gap-1">
          <b>Ismi:</b>
          <span>{user?.first_name}</span>
        </li>
        <li className="flex gap-1">
          <b>Familyasi:</b>
          <span>{user?.last_name}</span>
        </li>
        <li className="flex gap-1">
          <b>Contacts:</b>
          <div className="flex gap-2">
            <span>{user?.phone}</span>
            <span>{user?.email}</span>
          </div>
        </li>
        <li className="flex gap-1">
          <b>Role:</b>
          <span>{user?.role}</span>
        </li>
        <li className="flex gap-1">
          <b>Holati:</b>
          <span>{user?.status}</span>
        </li>
      </ul>

      <div className="flex justify-end gap-2 items-center">
        <Link
          href={pathname + "/edit"}
          className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span className="mr-2">
            <MdOutlineEdit />
          </span>
          Edit
        </Link>
        <Link
          href="#delete"
          className="inline-flex items-center justify-center rounded-md bg-danger py-3 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span className="mr-2">
            <RiDeleteBin6Line />
          </span>
          Delete
        </Link>
      </div>
    </div>
  );
}

export default User;