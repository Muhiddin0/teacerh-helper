"use client";

import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import "../custom.css"

import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { GetMe } from "@/services";
import { useRouter } from "next/navigation";
import { IAuthState } from "@/interface/auth-interface";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  const route = useRouter()

  useEffect(() => {
    let userToken = window.localStorage.getItem('user')
    if (!userToken) route.push('/auth/signup')

    GetMe(userToken)
      .then((response) => {
        let { data }: IAuthState = response.data

        let role = data.role.name

        console.log(role);

        if (role == "moderator")
          route.push('/moderator')
        else if (role == "teacher")
          route.push('/')
      })
  })
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
