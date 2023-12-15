"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const User = () => {

  const pathname = usePathname()

  return (
    <div>

      <h1 className="text-3xl">Samandar</h1>

      <ul className="mt-4">
        <li className="flex gap-1">
          <b>Ismi:</b>
          <span>Samandar</span>
        </li>
        <li className="flex gap-1">
          <b>Familyasi:</b>
          <span>Samandar</span>
        </li>
        <li className="flex gap-1">
          <b>Contacts:</b>
          <div className="flex gap-2">
            <span>+998905650213, </span>
            <span>admin@gmail.com</span>
          </div>
        </li>
        <li className="flex gap-1">
          <b>Role:</b>
          <span>Admin</span>
        </li>
        <li className="flex gap-1">
          <b>Holati:</b>
          <span>active</span>
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