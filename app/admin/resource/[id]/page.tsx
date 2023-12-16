'use client'

import { useRouter } from 'next/navigation'

import { RiDeleteBin6Line } from "react-icons/ri";
import { ResourceItems } from '../../../moderator/my-resource/[id]/resource-items/resource-items'
import { moderatorResourceMedias } from '../../../moderator/my-resource/[id]/resource-items/resource-items.items'
import { createRef, useEffect, useState } from 'react';
import { DeleteResource, ShowResource } from '@/services/admin';
import { resourceShowType } from './page.type';
import { DeleteModal } from '@/components/delete-moda/delete-modal';
import { ButtonLoader } from '@/components/button-loader';

const ResourceShow = (props) => {

  const router = useRouter()
  const { id } = props.params

  const [resourceitem, setResourceItem] = useState<resourceShowType>()

  const [buttonIsLoad, setButtonIsLoad] = useState<boolean>(false)

  useEffect(() => {

    let userAuth = String(window.localStorage.getItem('user'))
    console.log(userAuth);

    ShowResource(userAuth, id)
      .then((response) => {
        let { data } = response.data
        setResourceItem(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const deleteModalRef = createRef()

  const closeButton = () => {
    deleteModalRef.current.classList.toggle("active")
  }

  const handleDelete = () => {
    setButtonIsLoad(true)

    let userAuth = String(window.localStorage.getItem('user'))
    console.log(userAuth);

    DeleteResource(id, userAuth)
      .then((response) => {
        router.back()
        console.log(response);
        setButtonIsLoad(false)
      })
      .catch((error) => {
        console.log(error);
        setButtonIsLoad(false)
      })

  }
  return (
    <>
      <div className="">
        <h1 className="text-3xl">Test Resource</h1>

        <div className="gap-1 mt-4">
          <h1 className="inline text-xl font-bold">Mavzu: </h1>
          <p className='inline'>{resourceitem?.topic.topic_name}</p>
        </div>

        <div className="mt-4">
          <b className="text-xl">Resource</b>
          <ul className="pl-4">
            <li className="flex gap-1">
              <b>Sinf:</b>
              <p>{resourceitem?.topic.add.class}</p>
            </li>
            <li className="flex gap-1">
              <b>Chorak:</b>
              <p>{resourceitem?.topic.add.quarter}</p>
            </li>
            <li className="flex gap-1">
              <b>Fan:</b>
              <p>{resourceitem?.topic.add.science}</p>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <b className="text-xl">User</b>
          <ul className="pl-4">
            <li className="flex gap-1">
              <b>Ismi:</b>
              <p>{resourceitem?.moderator.user.first_name}</p>
            </li>
            <li className="flex gap-1">
              <b>Familyasi:</b>
              <p>{resourceitem?.moderator.user.last_name}</p>
            </li>
            <li className="flex gap-1">
              <b>Email:</b>
              <p>{resourceitem?.moderator.user.email}</p>
            </li>
          </ul>
        </div>

        <h1 className="mt-8">Sizning hujjatlaringiz</h1>
        <ResourceItems items={resourceitem?.media} />

        <div className="w-full flex justify-end gap-3 mt-6">
          <button
            onClick={closeButton}
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <RiDeleteBin6Line />
            O'chirish
          </button>
        </div>
      </div>

      <div ref={deleteModalRef} className='delete-modal fixed top-0 left-0 z-[100000] flex justify-center items-center w-full h-full bg-[var(--transparent)] text-white'>
        <div className='p-4 bg-bodydark1 dark:bg-black rounded-md'>
          <h1 className='text-2xl'>
            Ushbu resource o'chirmoqchimisz
          </h1>
          <div className='flex justify-end items-center gap-2 mt-6'>
            <button onClick={closeButton} className='flex py-2 px-4 rounded-md bg-primary hover:opacity-75 transition-all'>Bekor qilish</button>
            <button disabled={buttonIsLoad} onClick={handleDelete} className='flex gap-2 py-2 px-4 rounded-md bg-danger hover:opacity-75 transition-all'>
              {
                buttonIsLoad ?
                  <ButtonLoader /> : null
              }
              O'chirish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceShow;