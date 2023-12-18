'use client'
import { createRef, useEffect, useRef, useState } from 'react'


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

// icons
import { FaRegFileLines } from "react-icons/fa6";
import { ButtonLoader } from '@/components/button-loader';
import { AiOutlineCloudUpload } from "react-icons/ai";


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

  // refs
  const mainWraperRef = createRef<HTMLDivElement>()

  // file instrface
  interface File {
    name: string;
    type: string;
    size: number;
  }

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

          <div className='flex justify-around items-center gap-6'>
            <select onChange={(e) => { setResourceClass(e.target.value), ErrorRemover(e) }} id="small" className="class-input block bg-gray-2 dark:bg-form-strokedark px-5 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                <div key={index} className='flex items-center gap-4 bg-gray-2 dark:bg-form-strokedark p-4 rounded-md'>
                  <span className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-strokedark'>
                    <FaRegFileLines />
                  </span>
                  <span className='text-xl flex-grow-[1] overflow-hidden whitespace-nowrap'>{item.name}</span>
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
                Jo'natish
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ModeratorResoureCreate;