'use client'

import { getUsers } from "@/services/admin";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { users } from "./types";

const Users = () => {

  const [users, setUsers] = useState<users[]>([])

  const pathname = usePathname()

  useEffect(() => {

    let authToken = String(window.localStorage.getItem('user'))

    getUsers(authToken)
      .then((respone) => {
        let { data } = respone.data.data
        setUsers(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div>
      <>
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Ismi
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Familyasi
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Contact
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Role
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {item.first_name}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {item.last_name}
                  </td>
                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex flex-col">
                      <p>
                        {item.phone}
                      </p>
                      <p>
                        {item.email}
                      </p>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.status}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link className="bg-primary text-white py-2 px-3 rounded-md hover:opacity-70 transition-all" href={pathname + "/" + item.id}>Ko'rish</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>

    </div>
  );
}

export default Users;