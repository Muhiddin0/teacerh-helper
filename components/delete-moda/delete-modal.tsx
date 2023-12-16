import React, { createRef } from 'react'

interface IDelete {
  deleteFunction: () => {}
}

export const DeleteModal: React.FC<IDelete> = ({ deleteFunction }) => {

  const deleteModalRef = createRef()

  const closeButton = () => {
    deleteModalRef.current.classList.toggle("active")
  }

  return (
    <div ref={deleteModalRef} className='delete-modal fixed top-0 left-0 z-[100000] flex justify-center items-center w-full h-full bg-[var(--transparent)] text-white'>
      <div className='p-4 bg-bodydark1 dark:bg-black rounded-md'>
        <h1 className='text-2xl'>
          Ushbu resource o'chirmoqchimisz
        </h1>
        <div className='flex justify-end items-center gap-2 mt-6'>
          <button onClick={deleteFunction} className='flex py-2 px-4 rounded-md bg-primary hover:opacity-75 transition-all'>Bekor qilish</button>
          <button onClick={closeButton} className='flex py-2 px-4 rounded-md bg-danger hover:opacity-75 transition-all'>O'chirish</button>
        </div>
      </div>
    </div>
  )
}
