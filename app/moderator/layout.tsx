"use client";
import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import "../custom.css"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// store
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Classes } from "@/services/bekome-moderator";
import { Science } from "@/services/base";
import { setClass } from "@/redux/features/classSlice";

// components
import Loader from "@/components/common/Loader";
import Sidebar from "./Sidebar";
import Header from "./Header";

// api
import { GetMe } from "@/services";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // router
  const message = useSelector((state: RootState) => state.messages)
  const classList = useSelector((state: RootState) => state.class)
  const dispatch = useDispatch()

  const route = useRouter()

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    let userToken = window.localStorage.getItem('user')
    if (!userToken) route.push('/auth/signup')

    GetMe(userToken)
      .then((response) => {
        let role = response.data.data.role.name
        if (role == "admin")
          route.push('/admin')
        else if (role == "teacher")
          route.push('/')
      })


    // set class
    Classes()
      .then((response) => {
        console.log('moderator class add test');
        console.log(classList);
        console.log(response.data.data);
      })

    // // set sciense
    // const setSciense = async () => {
    //   let science = await Science()
    //   let scienseItems = JSON.stringify(science.data["data"])
    //   window.localStorage.setItem('science', scienseItems)
    // }
    // setSciense()
  }, [])

  return (
    <html lang="uz">
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
        <div className="fixed z-[1000000] left-[-350px] bottom-0 top-auto flex flex-col gap-3 p-3">
          {
            message.map((item, index) => (
              <div key={index} className="message-box relative p-3 bg-stroke rounded-md text-black-2 w-[300px] overflow-hidden">
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-primary"></span>
              </div>
            ))
          }
        </div>
      </body>
    </html>
  );
}
