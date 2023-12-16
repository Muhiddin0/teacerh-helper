"use client";

import "../globals.css"
import "../custom.css"
import "../data-tables-css.css";
import "../satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";

import { Provider } from 'react-redux'
import { store } from "@/redux/store";
import { GetMe } from "@/services";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let userToken: string | null = window.localStorage.getItem('user')

    if (userToken) {
      GetMe(userToken).then(r => {
        let role = r.data.data.role.name
        if (role == "moderator")
          router.push('/moderator')
        else if (role == "admin")
          router.push('/admin')
        else if (role == "teacher")
          router.push('/')
      })
    }
  })

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-auto">
            {loading ? (
              <Loader />
            ) : (
              <div className="h-screen overflow-auto">

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            )}
          </div>
        </body>
      </html>
    </Provider>
  );
}
