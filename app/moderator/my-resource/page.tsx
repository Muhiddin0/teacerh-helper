'use client'

import { SectionTitle } from "@/components/section-title/section-title";
import { ResourceItems, moderatorResourceItems } from './components'

import { TableThree } from './components/table/table'
import { useEffect, useState } from "react";
import { ResourceList } from "@/services/moderator";
import { TModeratorResorceitem } from "./components/table/resource-items.type";

const ModeratorResorce = () => {

  const [resourceList, setResourceList] = useState<TModeratorResorceitem[]>([])

  useEffect(() => {
    let authToken = String(window.localStorage.getItem('user'))

    ResourceList(authToken)
      .then((response) => {
        let { data } = response
        setResourceList(data)
      })
  }, [])

  return (
    <div>
      <TableThree items={resourceList} />
    </div>
  );
}

export default ModeratorResorce;