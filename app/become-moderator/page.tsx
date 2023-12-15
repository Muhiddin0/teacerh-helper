import Link from "next/link";

import { VscSend } from "react-icons/vsc";


const BekomeModerator = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Moderator bo'lsih uchun ariz topshirish
          </h3>
        </div>

        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              jshshir kiriting
            </label>
            <input
              type="text"
              placeholder="12345678901234"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="p-4 md:p-6 xl:p-9">
            <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Jo'natish
                <VscSend />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default BekomeModerator;