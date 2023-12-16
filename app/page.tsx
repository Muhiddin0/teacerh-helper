'use client'

import Calendar from "@/components/Calender";
import ECommerce from "@/components/Dashboard/E-commerce";
import { Classes, Science } from "@/services/bekome-moderator";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};


export default function Home() {

  const router = useRouter()

  useEffect(() => {
    let user = window.localStorage.getItem('user')
    if (!user)
      router.push('/auth/signup')
    else {
      // let userToken = window.localStorage.getItem('user')
      // userToken ?
      //   RedirectBy(userToken) : null
    }
  }, [])

  return (
    <>
      <Calendar />
    </>
  );
}
