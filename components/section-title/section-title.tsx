import React from 'react'

interface ISectionTitle {
  title: string
}

export const SectionTitle: React.FC<ISectionTitle> = ({ title }) => {
  return (
    <h1 className='resouce-title relative inline-block capitalize text-xl mt-6 pb-2'>
      {title}
      <span className='absolute bottom-0 top-auto w-[80%] h-[2px] bg-blue-500 block'></span>
    </h1>
  )
}
