
import upload from '@/app/assets/images/upload-file.png'
import Image from 'next/image';

// icons
import { FaRegFileLines } from "react-icons/fa6";

const ModeratorResoureCreate = () => {
  return (
    <div>

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Resurs yaratish
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">

          {/* resiurce name */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Resurs nomi
            </label>
            <input
              type="text"
              placeholder="Default Input"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className='flex justify-around items-center gap-6'>
            <select id="small" className="block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Sinfni tanlang</option>
              <option value="US">1-sinf</option>
              <option value="US">2-sinf</option>
              <option value="US">3-sinf</option>
              <option value="US">4-sinf</option>
              <option value="US">5-sinf</option>
              <option value="US">6-sinf</option>
              <option value="US">7-sinf</option>
              <option value="US">8-sinf</option>
              <option value="US">8-sinf</option>
              <option value="US">10-sinf</option>
              <option value="US">11-sinf</option>
            </select>
            <select id="small" className="block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Fanni nalang</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
              <option value="US">temp fann</option>
            </select>
          </div>

          {/* uploaded box */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-6 mt-3">
            <div className='flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
              <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-strokedark'>
                <FaRegFileLines />
              </span>
              <span className='text-xl flex-grow-[1] overflow-hidden whitespace-nowrap'>My resocdsvdfvdfurc</span>
            </div>
            <div className='flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
              <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-strokedark'>
                <FaRegFileLines />
              </span>
              <span className='text-xl overflow-hidden whitespace-nowrap'>My resource name</span>
            </div>
            <div className='flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
              <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-strokedark'>
                <FaRegFileLines />
              </span>
              <span className='text-xl overflow-hidden whitespace-nowrap'>My resource name</span>
            </div>
            <div className='flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
              <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-strokedark'>
                <FaRegFileLines />
              </span>
              <span className='text-xl overflow-hidden whitespace-nowrap'>My resource name</span>
            </div>
            <div className='flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
              <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-strokedark'>
                <FaRegFileLines />
              </span>
              <span className='text-xl overflow-hidden whitespace-nowrap'>My resource name</span>
            </div>
          </div>

          {/* 
              drop and dow
              file upload
          */}
          <div className='flex justify-center items-center w-full mt-6'>
            <div className="flex flex-col gap-6 justify-center items-center w-[500px] h-[400px] rounded-md border-[3px] border-body border-dashed">
              <Image width={300} src={upload} alt='upload' />
              <button
                className="inline-flex items-center rounded-md justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                <span>
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8125 16.6656H2.1875C1.69022 16.6656 1.21331 16.4681 0.861675 16.1164C0.510044 15.7648 0.3125 15.2879 0.3125 14.7906V5.20935C0.3125 4.71207 0.510044 4.23516 0.861675 3.88353C1.21331 3.53189 1.69022 3.33435 2.1875 3.33435H17.8125C18.3098 3.33435 18.7867 3.53189 19.1383 3.88353C19.49 4.23516 19.6875 4.71207 19.6875 5.20935V14.7906C19.6875 15.2879 19.49 15.7648 19.1383 16.1164C18.7867 16.4681 18.3098 16.6656 17.8125 16.6656ZM2.1875 4.58435C2.02174 4.58435 1.86277 4.6502 1.74556 4.76741C1.62835 4.88462 1.5625 5.04359 1.5625 5.20935V14.7906C1.5625 14.9564 1.62835 15.1153 1.74556 15.2325C1.86277 15.3498 2.02174 15.4156 2.1875 15.4156H17.8125C17.9783 15.4156 18.1372 15.3498 18.2544 15.2325C18.3717 15.1153 18.4375 14.9564 18.4375 14.7906V5.20935C18.4375 5.04359 18.3717 4.88462 18.2544 4.76741C18.1372 4.6502 17.9783 4.58435 17.8125 4.58435H2.1875Z"
                      fill=""
                    />
                    <path
                      d="M9.9996 10.6438C9.63227 10.6437 9.2721 10.5421 8.95898 10.35L0.887102 5.45001C0.744548 5.36381 0.642073 5.22452 0.602222 5.06277C0.58249 4.98268 0.578725 4.89948 0.591144 4.81794C0.603563 4.73639 0.631922 4.65809 0.674602 4.58751C0.717281 4.51692 0.773446 4.45543 0.839888 4.40655C0.906331 4.35767 0.981751 4.32236 1.06184 4.30263C1.22359 4.26277 1.39455 4.28881 1.5371 4.37501L9.60898 9.28126C9.7271 9.35331 9.8628 9.39143 10.0012 9.39143C10.1395 9.39143 10.2752 9.35331 10.3934 9.28126L18.4621 4.37501C18.5323 4.33233 18.6102 4.30389 18.6913 4.29131C18.7725 4.27873 18.8554 4.28227 18.9352 4.30171C19.015 4.32115 19.0901 4.35612 19.1564 4.40462C19.2227 4.45312 19.2788 4.51421 19.3215 4.58438C19.3642 4.65456 19.3926 4.73245 19.4052 4.81362C19.4177 4.89478 19.4142 4.97763 19.3948 5.05743C19.3753 5.13723 19.3404 5.21242 19.2919 5.27871C19.2434 5.34499 19.1823 5.40108 19.1121 5.44376L11.0402 10.35C10.7271 10.5421 10.3669 10.6437 9.9996 10.6438Z"
                      fill=""
                    />
                  </svg>
                </span>
                Button With Icon
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ModeratorResoureCreate;