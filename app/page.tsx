'use client'

import Calendar from "@/components/Calender";
import ECommerce from "@/components/Dashboard/E-commerce";
import { GetMe } from "@/services";
import { Classes, Science } from "@/services/bekome-moderator";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


// redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addPerson } from '@/redux/features/authSlice'
import { IAuthState } from "@/interface/auth-interface";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
};


export default function Home() {

  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const router = useRouter()

  useEffect(() => {
    let userToken = window.localStorage.getItem('user')
    if (!userToken) router.push('/auth/signup')

    GetMe(userToken)
      .then((response) => {
        let responsedata: IAuthState = response.data.data

        console.log(responsedata);
        dispatch(addPerson(responsedata))
        console.log(user);
      })
  }, [])

  return (
    <>
      <Calendar />
    </>
  );
}
