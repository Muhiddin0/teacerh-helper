'use client'

import Calendar from "@/components/Calender";
import ECommerce from "@/components/Dashboard/E-commerce";
import { GetMe } from "@/services";
import { Classes, Science } from "@/services/bekome-moderator";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addPerson } from '@/redux/features/authSlice'
import { IAuthState } from "@/interface/auth-interface";

// export const metadata: Metadata = {
//   title: "TailAdmin | Next.js E-commerce Dashboard Template",
//   description: "This is Home Blog page for TailAdmin Next.js",
// };


export default function Home() {

  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useState(() => {
    console.log('salom');
  })

  const router = useRouter()

  useEffect(() => {
    let userToken = window.localStorage.getItem('user')
    if (!userToken) router.push('/auth/signup')

    GetMe(userToken)
      .then((response) => {
        let { data }: IAuthState = response.data

        let role = data.role.name

        if (role == "moderator")
          router.push('/moderator')
        else if (role == "admin")
          router.push('/admin')

        console.log(data);

        dispatch(addPerson(response.data))

      })
  }, [])

  return (
    <>
      <Calendar />
    </>
  );
}
