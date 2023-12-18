"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import "./custom.css"

import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Classes, Science } from "@/services/bekome-moderator";
import { useRouter } from "next/navigation";
import { GetMe } from "@/services";
import { store } from "@/redux/store";
import { Provider } from 'react-redux'
import NextBreadcrumb from "@/components/breadcrup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  // set class and scices
  useEffect(() => {
    // set class
    const setClass = async () => {
      let classes = await Classes()
      let classitems = JSON.stringify(classes.data["data"])
      window.localStorage.setItem('classes', classitems)
    }

    setClass()

    // set sciense
    const setSciense = async () => {
      let science = await Science()
      let scienseItems = JSON.stringify(science.data["data"])
      window.localStorage.setItem('science', scienseItems)
    }
    setSciense()
  }, [])

  return (
    <>
      <Provider store={store}>
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
                        <NextBreadcrumb homeElement={'home'} separator={""} />
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
      </Provider>
    </>
  );
}
