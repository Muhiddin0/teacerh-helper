'use client'

import Link from "next/link";
import React, { createRef, useEffect, useState } from "react";
import { ButtonLoader } from "@/components/button-loader"
import { IoSendSharp } from "react-icons/io5";

// axios
import { RequestModerator, Classes } from "@/services/bekome-moderator";

// redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { addMessage } from '@/redux/features/messageSlice'
// import { IAuthState } from "@/interface/auth-interface";

const BekomeModerator = () => {

  const messages = useSelector((state: RootState) => state.messages)
  const dispatch = useDispatch()

  // // test
  // useEffect(() => {
  //   dispatch(addMessage("salom"))
  //   console.log(messages);
  // })

  const [requestIsProcced, setRequestIsProcced] = useState<boolean>(false)

  // states
  const [jshshir, setJshshir] = useState<string>('')
  const [selectedScience_id, setScience_id] = useState<string>('')
  const [authToken, setAuthToken] = useState<string>('')

  type TClassItems = {
    id: number
    class_name: string,
  }[]

  type TScienseItems = {
    id: number
    science_name: string,
    science_group: string,
  }[]

  const [classItems, setClassItems] = useState<TClassItems>([])
  const [scienseItems, setScienseItems] = useState<TScienseItems>([])

  useState(() => {

    let token: string = window.localStorage.getItem("user")
    setAuthToken(token)

    // get items
    let scienceitems = JSON.parse(window.localStorage.getItem("science"))

    // set items
    setScienseItems(scienceitems)
  })

  // ref
  const jshshirRef = createRef<HTMLInputElement>(0)
  const scienceRef = createRef<HTMLOptionElement>(0)

  // erro remove
  const formErrorRemover = (e: React.ChangeEvent<HTMLInputElement>) => e.target.style = ""

  const formValidator = () => {
    let formIsValid = true

    if (jshshir.length < 14) {
      jshshirRef.current.style.border = '1px solid red'
      formIsValid = false
    }

    if (!selectedScience_id) {
      scienceRef.current.style.border = '1px solid red'
      formIsValid = false
    }

    return formIsValid
  }

  const handleSubmit = async () => {

    // form validator
    let formIsValid = formValidator()
    if (!formIsValid) return

    RequestModerator(selectedScience_id, jshshir, authToken)
      .then((response) => {
        console.log(response);
        let responseMessage = response.data.message
        dispatch(addMessage(responseMessage))
      })
      .catch((error) => {

        let responseMessage = error.response.data.message
        dispatch(addMessage(responseMessage))
      })
  }
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        {/* header */}
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Moderator bo'lsih uchun ariz topshirish
          </h3>
        </div>

        {/* JSHSHIR */}
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              jshshir kiriting
            </label>
            <input
              ref={jshshirRef}
              max={14}
              min={0}
              onChange={(e) => { setJshshir(e.target.value), formErrorRemover(e) }}
              type="text"
              placeholder="12345678901234"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>

        {/* science  AND Cass*/}
        <div className='flex justify-around items-center gap-6 py-4 px-6.5'>
          <select onChange={(e) => { setScience_id(e.target.value), formErrorRemover(e) }} ref={scienceRef} id="small" className="block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Fanni nalang</option>
            {
              scienseItems.map((item, index) => (
                <option key={index} value={item.id}>{item.science_name}</option>
              ))
            }
          </select>
        </div>

        <div className="flex justify-end">
          <div className="p-4 md:p-6 xl:p-9">
            <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
              <button
                onClick={(e) => handleSubmit(e)}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                {
                  requestIsProcced ?
                    <ButtonLoader /> : null
                }
                Jo'natish
                <IoSendSharp />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* messages */}
      <div className="fixed z-[1000000] left-[-350px] bottom-0 top-auto flex flex-col gap-3 p-3">
        {
          messages.map((item, index) => (
            <div key={index} className="message-box relative p-3 bg-stroke rounded-md text-black-2 w-[300px] overflow-hidden">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-primary"></span>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default BekomeModerator;