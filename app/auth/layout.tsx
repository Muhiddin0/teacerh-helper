"use client";
import "../globals.css"
import "../custom.css"
import "../data-tables-css.css";
import "../satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

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

  return (
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
  );
}
