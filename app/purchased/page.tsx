import React from 'react'
import { ResourceItems } from './components/resources-items/resources-items'
import { resoucreItem } from './components/resources-items/resources-items.items'

const Purchased: React.FC = () => {
  return (
    <>
      <ResourceItems items={resoucreItem} />
    </>
  )
}

export default Purchased