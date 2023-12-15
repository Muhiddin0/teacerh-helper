'use client'

import React from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';

// components
import { SectionTitle } from '@/components/section-title/section-title'
import { Month } from './components';

// data items
import { resourceClassItems } from './my-resource-class.items'

export const MyResourseClass = () => {

  return (
    <div className=''>
      <SectionTitle title='geometriya' />
      <div className='flex flex-col gap-6'>
        <Month items={resourceClassItems} month='sentabr' />
        <Month items={resourceClassItems} month='sentabr' />
        <Month items={resourceClassItems} month='sentabr' />
        <Month items={resourceClassItems} month='sentabr' />
        <Month items={resourceClassItems} month='sentabr' />
      </div>
    </div>
  )
}

export default MyResourseClass
