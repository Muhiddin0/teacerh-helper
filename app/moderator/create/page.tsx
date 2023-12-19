'use client'
import React, { createRef, useEffect, useRef, useState } from 'react'


// react
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '@/redux/features/messageSlice';
import { CreateResource } from '@/services/moderator';
import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation';

// libs
import Dropzone from "react-dropzone";

// asstes
import upload from '@/app/assets/images/upload-file.png'
import Image from 'next/image';

// components
import { Pagination, Tthemeitems } from './components/theme-list/theme-list.t';
import { ButtonLoader } from '@/components/button-loader';

// icons
import { FaRegFileLines } from "react-icons/fa6";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";


// api
import { Topics, TopicsFilter } from '@/services/base';


const ModeratorResoureCreate = () => {

  // router
  const router = useRouter()

  // redux
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  // state
  const [buttonIsLoad, setButtonIsLoad] = useState<boolean>(false)
  const [fileContent, setFileContent] = useState<any[]>([]);
  const [resourceName, setResourceName] = useState<string>("")
  const [resourceClass, setResourceClass] = useState<string>("Sinfni tanlang")
  const [classID, setClassID] = useState<number | string>("")
  const [classList, setClassList] = useState<[]>([])
  const [scienceID, setScienceID] = useState<number | string>("")
  const [topicID, setTopicID] = useState<number | boolean>(false)
  const [topicName, setTopicName] = useState<string>("")

  const [nowSearching, SetNowSearching] = useState<string>("")

  const [themes, setThemes] = useState<Tthemeitems[]>([])
  const [searchTheme, setSearchTheme] = useState<Tthemeitems[]>([])
  const [pagination, setPagination] = useState<Pagination | null>()

  const [searchQ, setSearchQ] = useState<string>("")
  const [searchStep, setSearchStep] = useState<boolean>(false)

  // refs
  const mainWraperRef = createRef<HTMLDivElement>()
  const searchInputRef = createRef<HTMLInputElement>()

  // file instrface
  interface File {
    name: string;
    type: string;
    size: number;
  }

  useEffect(() => {

    console.log(user);

    setClassList(
      JSON.parse(String(window.localStorage.getItem('classes')))
    )
  }, [])

  const handleDrop = (acceptedFiles: File[]) => {
    let newFiles = [...fileContent, ...acceptedFiles]
    setFileContent(newFiles)
    console.log(fileContent);
    handleDragLeave()
  };

  function HandledragEnter() {
    let dropBox = document.querySelector('.drop-box')
    dropBox?.classList.add('on-drop')
  }

  function handleDragLeave() {
    let dropBox = document.querySelector('.drop-box')
    dropBox?.classList.remove('on-drop')
  }

  function CreateResourceFormIsValid() {
    let formIsValid = true

    let resourNameInput = document.querySelector(".resourname")
    let classInput = document.querySelector(".class-input")
    let dropBox = document.querySelector(".drop-box")

    if (resourceName < 5) {
      resourNameInput.style = "border: 1px solid red;"
      formIsValid = false
    }
    if (resourceClass == "Sinfni tanlang") {
      classInput.style = "border: 1px solid red;"
      formIsValid = false
    }
    if (!fileContent) {
      dropBox.style = "border: 1px dashed red;"
      formIsValid = false
    }
    return formIsValid
  }

  function ErrorRemover(e) {
    e.target.style = ""
  }

  function HandleCreateResource() {

    console.log(!CreateResourceFormIsValid());

    if (!CreateResourceFormIsValid()) return

    setButtonIsLoad(true)

    dispatch(addMessage("Resurlaringiz yuklanmoqda"));

    let topic_id = 1
    let authToken = String(window.localStorage.getItem('user'))

    CreateResource(resourceName, topic_id, fileContent, authToken)
      .then((response) => {
        dispatch(addMessage("Resurlaringiz yuklandi"));
        setButtonIsLoad(false)

        let { id } = response.data.data

        console.log(response);
        router.push('my-resource/' + id)
      })
      .catch(() => {
        setButtonIsLoad(false)
        dispatch(addMessage("Xatolk yuz berdi"));
      });
  }

  function removeDropError() {
    let dropBox = document.querySelector('.drop-box')
    console.log(dropBox);
    dropBox.style = ''
  }

  function handleSelectClasss(e) {
    let classID = e.target.value
    setResourceClass(e.target.value)

    let scienceID = user.data.science.id
    console.log(classID);

    setClassID(classID)
    setScienceID(scienceID)

    Topics(classID, scienceID)
      .then((response) => {
        let { data } = response.data
        let { meta } = response.data

        setThemes(data)
        setPagination(meta)
        console.log(meta);
      })

    ErrorRemover(e)
  }

  function handleTopicSelect(topic_id: number | false, topic_name: string) {
    setTopicName(topic_name)
    setTopicID(topic_id)
  }

  function handeFilter() {

    console.log(searchQ);

    if (!searchQ) return
    setSearchStep(true)

    let scienceID = user.data.science.id

    TopicsFilter(classID, scienceID, searchQ)
      .then((response) => {
        let { data } = response.data
        setSearchTheme(data)
      })
  }

  function closeSearch() {
    searchInputRef.current.value = ''
    setSearchQ('')
    setSearchStep(false)
  }

  function handlePagination(paginationID: number) {
    Topics(classID, scienceID, paginationID)
      .then((response) => {
        let { data } = response.data
        let { meta } = response.data

        setThemes(data)
        setPagination(meta)
        console.log(pagination);
      })
  }

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

          {/* fani */}
          <div>
            <label className="mb-3 block font-medium text-black dark:text-white">
              Faningiz
            </label>
            <input
              type="text"
              placeholder={user.data.science.science_name}
              disabled
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
            />
          </div>

          {/* Sinifi */}
          <div>
            <label className="mb-3 block font-medium text-black dark:text-white">
              Sinifi
            </label>
            <div className='flex justify-around items-center gap-6'>
              <select onChange={(e) => handleSelectClasss(e)} id="small" className="class-input block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Sinfni tanlang</option>
                {
                  classList.map((item, index) => (
                    <option key={index} value={item.id}>{item.class_name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {
            topicID ?
              <div className='flex justify-between w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black'>
                <label className="block font-medium text-black dark:text-white">
                  {topicName}
                </label>
                <button onClick={e => { handleTopicSelect(false) }} className='text-primary hover:opacity-80'>
                  <IoIosCloseCircleOutline size={22} />
                </button>
              </div>
              :
              <div className="topic-table active relative overflow-x-auto sm:rounded-lg my-4">
                <div className="">
                  <label htmlFor="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative flex gap-2 px-2 py-1 rounded-lg border-[1px] border-[#64748b]">
                    <input disabled={!classID} onChange={(e) => setSearchQ(e.target.value)} ref={searchInputRef} placeholder="Mavzu nomi bo'yicha qidirish" className='flex-grow-[2] border-none outline-none bg-transparent' type="text" />
                    {
                      searchStep ?
                        <button onClick={closeSearch} className='w-[30px] h-[30px]'>
                          <IoIosCloseCircleOutline size={22} />
                        </button> :
                        <button onClick={handeFilter} className='w-[30px] h-[30px]'>
                          <CiSearch size={22} />
                        </button>
                    }
                  </div>
                </div>

                {
                  !searchStep ?
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        {
                          themes.map((item, index) => (
                            <tr key={index} className="  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                <div className="flex items-center">
                                  <input
                                    id={"checkbox-table-search-" + index}
                                    type="checkbox"
                                    onChange={() => handleTopicSelect(item.id, item.topic_name)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label htmlFor={"checkbox-table-search-" + index} className="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                              >
                                <label htmlFor={"checkbox-table-search-" + index} className=" cursor-pointer">
                                  {item.topic_name}
                                </label>
                              </th>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table> : null
                }
                {
                  searchStep ?
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        {
                          searchTheme.map((item, index) => (
                            <tr key={index} className="  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                <div className="flex items-center">
                                  <input
                                    id={"checkbox-table-search-" + index}
                                    type="checkbox"
                                    onChange={() => handleTopicSelect(item.id, item.topic_name)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label htmlFor={"checkbox-table-search-" + index} className="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                              >
                                <label htmlFor={"checkbox-table-search-" + index} className=" cursor-pointer">
                                  {item.topic_name}
                                </label>
                              </th>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table> : null
                }
                <div className='flex gap-2 w-full my-4'>
                  {
                    pagination?.count ?
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, pagination.totalPage / 10).map((item, index) => (
                        <button onClick={() => handlePagination(item)} key={index} className='rounded-md bg-body w-[30px] h-[30px] text-white hover:opacity-80 transition-all'>{item}</button>
                      ))
                      : null
                  }
                </div>
              </div>
          }

          {/* resiurce name */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Resurs nomi
            </label>
            <input
              type="text"
              placeholder="Resurs nomi"
              onChange={(e) => { setResourceName(e.target.value), ErrorRemover(e) }}
              className="resourname w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          {/* uploaded box */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-6 mt-3">
            {
              fileContent.map((item, index) => (
                <div key={index} className='relative flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
                  <button className='absolute top-2 right-2 text-danger hover:opacity-80'>
                    <CiCircleRemove size={25} />
                  </button>
                  <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-primary text-white dark:bg-strokedark'>
                    <FaRegFileLines />
                  </span>
                  <div className='flex flex-col gap-1 '>
                    <span className='text-xl flex-grow-[1] text-md overflow-hidden whitespace-nowrap'>{item.name}</span>
                    <span className='text-xs'>10mg</span>
                  </div>
                </div>
              ))
            }
          </div>

          {/* 
              drop and dow
              file upload
          */}
          <div className='mt-6'></div>
          <Dropzone onDragEnter={(e) => { HandledragEnter(), removeDropError() }} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div ref={mainWraperRef} className='' {...getRootProps()}>
                <div className='flex justify-center items-center w-full'>
                  <div className="drop-box  flex flex-col gap-6 justify-center items-center w-[500px] h-[400px] rounded-md border-[3px] border-body border-dashed">
                    <Image width={250} src={upload} alt='upload' />
                    <button
                      className="inline-flex items-center rounded-md justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                      <AiOutlineCloudUpload size={25} />
                      File yuklash
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dropzone>


          {/* send file */}
          <div className='flex items-end justify-end w-full'>
            <button onClick={HandleCreateResource} disabled={buttonIsLoad} className='flex justify-center items-center py-2 px-5 hover:opacity-75 transition-all bg-primary text-white rounded-md'>
              {
                buttonIsLoad ? <ButtonLoader /> : null
              }
              <span className='ml-2'>
                Jo&#39;natish
              </span>
            </button>
          </div>

        </div>
      </div>
    </div >
  );
}

export default ModeratorResoureCreate;