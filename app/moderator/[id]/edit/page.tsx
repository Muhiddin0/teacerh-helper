
'use client'

import upload from '@/app/assets/images/upload-file.png'
import { ButtonLoader } from '@/components/button-loader';
import { showResource } from '@/services/moderator';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createRef, useEffect, useRef, useState } from 'react';

const EditResource = (props) => {

  const router = useRouter();
  const [resourceitem, setResourceItem] = useState()

  useEffect(() => {

    let user = String(window.localStorage.getItem('user'))
    let { id } = props.params

    console.log(user, id);

    showResource(id, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])


  // states
  const [buttonIsLoad, setButtonIsLoad] = useState<boolean>(false)

  // refs
  const resourceNameRef = useRef<HTMLInputElement>(0)
  const selectClassRef = useRef<HTMLSelectElement>(0)

  function formValid() {
    let formIsValid = true

    let resorceName = resourceNameRef.current
    let className = selectClassRef.current

    if (resorceName?.value.length > 4) {
      resorceName.style.border = "1px solid red"
      formIsValid = false
    }
    if (className?.value == "Sinfni tanlang") {
      className.style.border = "1px solid red"
      formIsValid = false
    }

    return formIsValid
  }

  function HandleUpdate() {
    if (!formValid()) return
    console.log('im run');
  }

  return (
    <div>
      <div className="">
        <h1 className="text-3xl">Test Resource</h1>

        <div className="flex items-end gap-1 mt-4">
          <h1 className="text-xl font-bold">Mavzu: </h1>
          <p>O‘zgaruvchi miqdorlar orttirmalarining nisbati va uning ma’nosi. Urinma ta’rifi. Funksiya orttirmasi</p>
        </div>

        <ul className="mt-2">
          <li>
            <b>Sinifi: </b>
            <span>5</span>
          </li>
          <li>
            <b>Chorak: </b>
            <span>1</span>
          </li>
          <li>
            <b>Fani: </b>
            <span>German language</span>
          </li>
        </ul>
      </div>

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-8">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Resursni tahrirlash
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">

          {/* resiurce name */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Resurs nomi
            </label>
            <input
              ref={resourceNameRef}
              type="text"
              placeholder="Default Input"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className='flex justify-around items-center gap-6'>
            <select ref={selectClassRef} id="small" className="block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
          </div>
        </div>
      </div>

      <div className='flex justify-end gap-3 items-center mt-4'>

        <button disabled={buttonIsLoad} className='flex justify-center items-center py-2 px-4 gap-2 bg-primary text-white rounded-md'>
          {
            buttonIsLoad ?
              <ButtonLoader /> : null
          }
          Saqlash
        </button>
        <Link href={"/moderator/my-resource"} className='flex justify-center bg-body py-2 px-4 text-white items-center gap-2  rounded-md'>
          Orqaga
        </Link>

      </div>
    </div>
  );

}

export default EditResource;